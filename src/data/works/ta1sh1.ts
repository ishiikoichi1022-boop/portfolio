import type { Work } from "./type";

export const ta1sh1: Work = {
    slug: "ta1sh1",
    title: "Illustrator TA1SH1",
    summary: "友人のイラストレーター・TA1SH1のポートフォリオサイトです。ヒアリングから設計・デザイン・実装・納品まで一人で担当しました。",
    tags: ["WordPress", "ACF", "JavaScript", "Sass"],
    role: "ヒアリング・設計・デザイン・実装",
    period: "2026年8月～2026年9月",
    url: "https://formkite.net/ta1sh1-portfolio/",
    image: {
        src: "/works/ta1sh1/main.png",
        alt: "TA1SH1ホームページのトップ"
    },
    challenge: "依頼主は外部のポートフォリオサービスで作品を公開し、依頼はメールで受け取る形でした。しかし、投稿のたびに反映を待つ時間が長く、負担に感じていました。そこで、コードに触れることなく本人が作品を追加でき、待ち時間も少ないサイトを作ろうと考えました。あわせて、必要な内容をそろえた依頼をサイトから受け付けられる形を提案しました。",
    approach: [
        {
            layout: "side",
            heading: "依頼主が自分で運用できる設計",
            body: "作品はACFのカスタムフィールドで登録し、表示順はIntuitive Custom Post Orderでドラッグして並べ替えられるようにしました。依頼フォームは依頼点数に応じて入力欄が増減し、1点ごとに内容が分かれて届くため、依頼主が整理しやすくなっています。",
            image: {
                src: "/works/ta1sh1/approach-1.png",
                alt: "依頼点数を3にして入力欄が3点分に増えた依頼フォーム"
            },
        },
        {
            layout: "below",
            heading: "別名義にも流用できるテーマ設計",
            body: "Customizerで選んだ3色をCSS変数として出力し、サイト全体の配色がその変数に従うようにしました。半透明の線やぼかしも、選んだ色に合わせて変わります。名義やSNSのURLもCustomizerで変えられるため、別の名義のサイトにもそのまま使えます。",
            images: [
                {
                    src: "/works/ta1sh1/approach-2-default.png",
                    alt: "既定の配色（黒の背景に白の文字、赤のアクセント）のORDERページ"
                },
                {
                    src: "/works/ta1sh1/approach-2-custom.png",
                    alt: "Customizerで配色を変えたORDERページ（生成りの背景に紺の文字、朱色のアクセント）"
                },
            ]
        },
        {
            layout: "side",
            heading: "縦横比のそろわないイラストの見せ方",
            body: "縦長と横長が混ざるイラストを、比率を崩さず見せるため、ギャラリーはMasonryレイアウトを採用しました。イラストを隙間なく並べ、タグで絞り込むこともできます。作品をクリックすると、1作品につき最大6枚の画像と説明文をモーダルで見ることができます。",
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