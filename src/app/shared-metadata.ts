import type { Metadata } from "next";

/** 全ページ共通のOGP。各ページの openGraph に ... で展開する（ページで openGraph を書くと、layout の openGraph は丸ごと置き換わるため） */
export const baseOpenGraph = {
    type: "website",
    locale: "ja_JP",
    siteName: "Ishii Koichi Portfolio",
    images: [
        {
            url: "/ogp.png",
            width: 1200,
            height: 630,
            alt: "「誰かの「こうしたい」を、動くかたちに。」と書かれたIshii Koichiのポートフォリオのトップページ"
        },
    ],
} satisfies Metadata["openGraph"];