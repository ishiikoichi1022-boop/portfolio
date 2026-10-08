"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { scrollToHash } from "@/lib/scrollToHash";

type WorksListProps = {
    className?: string;
    children: ReactNode;
}

/** 1作品当たりのスクロール量（画面の高さに対する割合）。大きいほど長く止まる */
const SCROLL_PER_WORK = 0.8;

/** 
 * ピン止めする条件。動きを減らす設定のときと、画面が低くて作品が収まらないとき
 * ピン止めせず、縦に並べたままにする
 */
const PIN_QUERY = "(prefers-reduced-motion: no-preference) and (min-height: 600px)";

/** 作品の並び。演出にJSが必要になるのでここだけクライアントにし、作品の中身はサーバーで組み込む */
export default function WorksList({ className, children }: WorksListProps) {
    const listRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        /**
         * /#contact などで開かれたときのとび先。ピン止めの余白で Works より下の位置がずれるため
         * ピン留めの位置が決まった時点で一度だけ合わせなおす
         */
        let pendingHash = window.location.hash;
        /**
         * 画面の回転などで条件が切り替わり、ピン留めを外したり付け直したりすると、
         * ScrollTrigger が一の計算のためにページの先頭までスクロールしたまま戻らない
         * 切り替わる直前で位置を覚えておき、計算が終わったら（refresh）そこへ戻す
         */
        let isFirstRun = true;
        let restoreY: number | null = null;

        function restoreScroll() {
            if (restoreY === null) return;
            window.scrollTo(0, restoreY);
            restoreY = null;
        }
        ScrollTrigger.addEventListener("refresh", restoreScroll)

        mm.add(PIN_QUERY, () => {
            /** 付け直すとき（2回目以降）は、条件が外れた時の関数が呼ばれないので、ここで覚える */
            if (!isFirstRun) restoreY = window.scrollY;
            isFirstRun = false;

            const list = listRef.current;
            const items = gsap.utils.toArray<HTMLElement>(list?.children ?? []);
            if (!list || items.length < 2) return;

            /** 作品を同じ場所に重ね、表示中の1件にだけ印をつける（見た目は Works.module.scss） */
            list.dataset.pinned = "";
            items[0].dataset.active = "";
            gsap.set(items.slice(1).flatMap((item) => [...item.children]), { opacity: 0 });

            let active = 0;

            function show(next: number) {
                const [prevImage, prevBody] = items[active].children;
                const [nextImage, nextBody] = items[next].children;
                delete items[active].dataset.active;
                items[next].dataset.active = "";
                active = next;

                gsap.timeline({ defaults: {duration: 0.5, ease: "power2.out", overwrite: "auto"} })
                /** 表示中の作品は先に消す */
                .to([prevImage, prevBody], { opacity: 0, duration: 0.3 }, 0)
                /** 画像はフェードのみ */
                .to(nextImage, { opacity: 1 }, 0)
                /** テキストは少し遅れて、フェードしながら上がってくる */
                .fromTo(nextBody, { y: 20 }, { opacity: 1, y: 0 }, 0.1);
            }

            const headerHeight = () => document.querySelector("header")?.offsetHeight ?? 0;

            const trigger = ScrollTrigger.create({
                trigger: list,
                pin: true,
                /** 作品の並びの中心が、ヘッダーより下の見えている範囲の中心に来たら止める */
                start: () => `center ${headerHeight() + (window.innerHeight - headerHeight()) / 2}px`,
                end: () => `+=${items.length * SCROLL_PER_WORK * window.innerHeight}`,
                onRefresh: () => {
                    if (!pendingHash) return;
                    scrollToHash(pendingHash);
                    pendingHash = "";
                },
                onUpdate: (self) => {
                    const next = Math.min(items.length - 1, Math.floor(self.progress * items.length));
                    if (next !== active) show(next);
                },
            });

            /** 透明な作品のリンクへ Tab で進んだら、その作品が表示される位置までスクロールする */
            function handleFocusIn(e: FocusEvent) {
                const index = items.findIndex((item) => item.contains(e.target as Node));
                if (index < 0 || index === active) return;
                const segment = (trigger.end - trigger.start) / items.length;
                window.scrollTo(0, trigger.start + segment * (index + 0.5));
            }

            list.addEventListener("focusin", handleFocusIn);

            return () => {
                restoreY = window.scrollY;
                list.removeEventListener("focusin", handleFocusIn);
                delete list.dataset.pinned;
                for (const item of items) delete item.dataset.active;
            };
        });

        return () => ScrollTrigger.removeEventListener("refresh", restoreScroll);
        
    }, {scope: listRef });

    return (
        <div ref={listRef} className={className}>
            {children}
        </div>
    )
}