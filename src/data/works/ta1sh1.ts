import type { Work } from "./type";

export const ta1sh1: Work = {
    slug: "ta1sh1",
    title: "Illustrator TA1SH1",
    summary: "（仮）ここに概要が入ります。",
    tags: ["WordPress", "ACF", "JavaScript", "Sass"],
    role: "ヒアリング・設計・デザイン・実装",
    period: "2026年8月~2026年9月",
    image: {
        src: "/works/ta1sh1/main.png",
        alt: "TA1SH1 ホームページのトップ"
    },
    challenge: "（仮）ここに課題・目的が入ります。",
    approach: [
        {
            layout: "side",
            heading: "（仮）見出し1",
            body: "（仮）ここに本文が入ります。",
            image: {
                src: "/works/ta1sh1/approach-1.png",
                alt: "依頼点数を3にして入力欄が3点分に増えた依頼フォーム"
            },
        },
        {
            layout: "below",
            heading: "（仮）見出し2",
            body: "（仮）ここに本文が入ります。",
        },
        {
            layout: "side",
            heading: "（仮）見出し3",
            body: "（仮）ここに本文が入ります。",
            image: {
                src: "/works/ta1sh1/approach-3.png",
                alt: "縦長と横長のイラストが隙間なく並んだギャラリー",
            }
        },
    ],
    implementation: {
        code: "（仮）ここに functions.php の抜粋が入ります。横スクロールを確認するための、とても長い行です。とても長い行です。とても長い行です。", /** （仮）ここに実装コードが入ります。 */
        caption: "（仮）ここにキャプションが入ります。", /** （仮）ここにキャプションが入ります。 */
    },
};