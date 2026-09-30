"use client"

import { useRef } from "react";
import Button from "@/components/Button/Button";
import { gsap, useGSAP} from "@/lib/gsap"
import styles from "./Hero.module.scss";

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const leadRef = useRef<HTMLParagraphElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        /** "動きを減らす"設定の時は何もしない（通常のスクロールのまま） */
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                    start: 0,
                    end: () => 
                        (titleRef.current?.offsetTop ?? 0) - (document.querySelector("header")?.offsetHeight ?? 0),
                    scrub: true,
                },
            })

            /** サブコピーとボタンが先に薄くなる */
            .to(
                [leadRef.current, actionsRef.current, scrollRef.current], { opacity: 0, duration: 0.6 }, 0)
            /** メインコピーは半分まで残り、最後に上へ動きながら消える */
            .to(titleRef.current, { opacity: 0, y: -40, duration: 0.8 }, 0.2)
        });
    }, { scope: heroRef });

    return (
        <section ref={heroRef} className={styles.hero}>
            <div className={styles.inner}>
                <h1 ref={titleRef} className={styles.title}>
                    <span className={styles.line}>
                        誰かの「<em className={styles.emphasis}>こうしたい</em>」を、
                    </span>
                    <span className={styles.line}>動くかたちに。</span>
                </h1>
                <p ref={leadRef} className={styles.lead}>
                    クライアントの要望をヒアリングし、使う人の立場で実装までやり切ります。
                </p>
                <div ref={actionsRef} className={styles.actions}>
                    <Button href="/#works">Worksを見る</Button>
                </div>
            </div>
            <div ref={scrollRef} className={styles.scroll} aria-hidden="true">
                <span>Scroll</span>
                <span className={styles.scrollLine} />
            </div>
        </section>
    );
}