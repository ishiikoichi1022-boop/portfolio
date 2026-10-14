import type { Work } from "./type";

export const portfolio: Work = {
    slug: "portfolio",
    title: "Portfolio",
    summary: "石井幸一のポートフォリオ（このサイト）です。企画・設計・デザイン・実装を一人で担当しました。Next.jsとTypeScriptで制作しています。",
    tags: ["Next.js", "TypeScript", "Sass", "GSAP"],
    role: "企画・設計・デザイン・実装",
    period: "2026年9月～2026年10月",
    image: {
        src: "/works/portfolio/main.webp",
        alt: "『誰かの「こうしたい」を、動くかたちに。』と書かれたこのサイトのトップページ"
    },
    challenge: "作品を印象よく見せるために、スクロールに合わせた演出を入れたいと考えていました。演出を入れると、キーボードで操作をする人や、読み上げ・動きを減らす設定を使う人が作品にたどり着きにくくなることがあります。そこで、演出を入れつつ、どの方法で閲覧しても作品にたどり着けるサイトを目指しました。",
    approach: [
        {
            layout: "side",
            heading: "演出とアクセシビリティの両立",
            body: "Worksでは、スクロールに合わせて画面を止め、作品を1件ずつ重ねて切り替えています。見えていない作品のリンクへTabで進むと、その作品が表示される位置まで自動でスクロールします。件数表示は、見た目は1つにまとめ、読み上げでは作品ごとに読みます。動きを減らす設定のときは、画面を止めずに縦に並べます。",
            image: {
                src: "/works/portfolio/approach-1.webp",
                alt: "Tabで2件目の作品のリンクへ進み、件数表示が02/02に切り替わったWorks"
            }
        },
        {
            layout: "below",
            heading: "ユーザー側の文字サイズ指定を尊重する設計",
            body: "文字や余白の大きさは、root（html）の文字サイズだけを画面幅に合わせて変え、ほかの値はすべてremで指定しました。基準にはブラウザの標準文字サイズを使用しているため、文字を大きく設定している人には、その比率のまま全体が拡大されます。また、拡大の妨げにならないよう、可変の幅に上限を設けました。",
            images: [
                {
                    src: "/works/portfolio/approach-2-default.webp",
                    alt: "ブラウザの文字サイズが標準のトップページ"
                },
                {
                    src: "/works/portfolio/approach-2-large.webp",
                    alt: "ブラウザの文字サイズを大にして、全体が拡大されたトップページ"
                },
            ]
        },
        {
            layout: "side",
            heading: "TypeScriptを利用した作品データの型設計",
            body: "作品の情報はTypeScriptのデータにまとめ、1件書き足して一覧に加えるだけで、Homeの作品と件数表示、詳細ページ、次の作品へのリンクが揃うようにしました。工夫した点の画像は、置き方ごとに必要な枚数を型で決めているため、つけ忘れや枚数の間違いにエディタ上ですぐに気づけます。",
            image: {
                src: "/works/portfolio/approach-3.webp",
                alt: "VS Codeの型エラー。imagesに画像が1枚しかなく、「ソースには 1 個の要素が含まれていますが、ターゲットには 2 個が必要です。」と表示されている"
            }
        },
    ],
    implementation: {
        code: `/** 透明な作品のリンクへ Tab で進んだら、その作品が表示される位置までスクロールする */
function handleFocusIn(e: FocusEvent) {
    const index = items.findIndex((item) => item.contains(e.target as Node));
    if (index < 0 || index === active) return;
    const segment = (trigger.end - trigger.start) / items.length;
    window.scrollTo(0, trigger.start + segment * (index + 0.5));
}

list.addEventListener("focusin", handleFocusIn);`,
        caption: "画面を止めている区間を作品の数で等分し、Tabで進んだ作品の区間の中央にスクロールするようにしました。中央にしたのは、上下どちらにスクロールしても、同じ量で隣の作品に切り替わるようにするためです。また、表示中の作品にフォーカスしたときは、スクロールをしないようにしました。",
    },
};