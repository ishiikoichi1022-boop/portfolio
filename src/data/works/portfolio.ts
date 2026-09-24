import type { Work } from "./type";

export const portfolio: Work = {
    slug: "portfolio",
    title: "Ishii Koichi Portfolio",
    summary: "（仮）このサイトの情報。ここに概要が入ります。",
    tags: ["Next.js", "TypeScript", "Sass"],
    role: "企画・設計・デザイン・実装",
    period: "2026年9月~2026年10月",
    challenge: "（仮）ここに課題・目的が入ります。",
    approach: [
        {
            layout: "side",
            heading: "（仮）ここに見出しが入ります。",
            body: "（仮）ここに本文が入ります。",
        },
    ],
    implementation: {
        code: "", /** （仮）ここに実装コードが入ります。 */
        caption: "", /** （仮）ここにキャプションが入ります。 */
    },
};