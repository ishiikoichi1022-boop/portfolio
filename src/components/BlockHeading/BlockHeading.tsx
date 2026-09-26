import styles from "./BlockHeading.module.scss";

type BlockHeadingProps = {
    /** 英字の見出し（例：Challenge） */
    en: string;
    /** 日本語の見出し（例：課題・目的） */
    ja: string;
};

export default function BlockHeading({ en, ja }: BlockHeadingProps) {
    return (
        <h2 className={styles.heading}>
            <span className={styles.en}>{en}</span>
            <span className={styles.ja}>{ja}</span>
        </h2>
    );
}