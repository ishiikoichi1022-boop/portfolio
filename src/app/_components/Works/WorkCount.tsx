import styles from "./WorkCount.module.scss";

type WorkCountProps = {
    /** 0始まりの順番 */
    index: number;
    total: number;
    className?: string;
};

const pad = (n: number) => String(n).padStart(2, "0");

/** 「Works 01 / 02」 の件数表示。作品ごとの表示と、ピン留め中の共通の表示 (WorksList)で使用 */
export default function WorkCount({ index, total, className}: WorkCountProps) {
    return (
        <p className={`${styles.count} ${className ?? ""}`}>
            <span className={styles.countLabel} aria-hidden="true">works</span>
            <span aria-hidden="true">{pad(index + 1)} / {pad(total)}</span>
            <span className={styles.visuallyHidden}>{total}件中{index + 1}件目</span>
        </p>
    )
}