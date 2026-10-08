import Image from "next/image";
import type { WorkImage as WorkImageData } from "@/data/works";
import styles from "./WorkImage.module.scss"
import { MOBILE_QUERY } from "@/lib/breakpoints";

/**
 * 置き場所ごとの、画面上で表示される幅の目安 (next/image の sizes)。
 * ブラウザが読み込む画像の大きさを選ぶのに使う。デスクトップの幅はコンテンツの上限から計算
 */
const SIZES = {
    /** HOME の作品（画像の列 588/1040） */
    card: `${MOBILE_QUERY} 100vw, 680px`,
    /** 詳細ページのメイン（コンテンツ幅いっぱい） */
    full: `${MOBILE_QUERY} 100vw, 1200px`,
    /** 工夫した点 パターンA（画像の列 46/106） */
    side: `${MOBILE_QUERY} 100vw, 520px`,
    /** 工夫した点 パターンB（2枚並び） */
    half: `${MOBILE_QUERY} 50vw, 600px`
} as const;

type WorkImageProps = {
    image?: WorkImageData;
    /** 画面上で表示される幅の目安。ブラウザが読み込む画像の大きさを選ぶのに使う */
    variant: keyof typeof SIZES;
    /** 画面を開いた直後に見える画像だけ true にする（遅延読み込みをやめる） */
    eager?: boolean;
    className?: string;
};

/** 作品の画像（16:10）。画像がまだないときは、同じ大きさの下地だけを表示する */
export default function WorkImage({ image, variant, eager = false, className}: WorkImageProps) {
    return (
        <div className={`${styles.frame} ${className ?? ""}`}>
            { image && (
                <Image 
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={SIZES[variant]}
                    loading={eager ? "eager" : "lazy"}
                    className={styles.image}
                />
            )}
        </div>
    );
}