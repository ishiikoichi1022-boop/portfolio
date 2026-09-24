export type WorkImage = {
    src: string;
    alt: string;
};

/** アプローチの1項目。画像の置き方で2パターン存在する */
export type ApproachItem = 
| {
    /** パターンA: 本文左・画像右 */
    layout: "side";
    heading: string;
    body: string;
    image?: WorkImage;
}
| {
    /** パターンB: 本文上・画像下 */
    layout: "below";
    heading: string;
    body: string;
    images?: [WorkImage, WorkImage];
};

export type Work = {
    /** URLに使う名前 {/works/[slug]} */
    slug: string;
    title: string;
    summary: string;
    /** Homeのタグと、詳細ページの「使用技術」を兼ねる */
    tags: string[];
    /** 担当範囲 */
    role: string;
    /** 制作期間 */
    period: string;
    /** サイトURL */
    url?: string;
    /** Homeの作品画像と、詳細ページのファーストビューを兼ねる */
    image?: WorkImage;
    challenge: string;
    approach: ApproachItem[];
    implementation: {
        code: string;
        caption: string;
    };
};