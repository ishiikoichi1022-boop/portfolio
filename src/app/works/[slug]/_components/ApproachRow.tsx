import type { ApproachItem } from "@/data/works";
import styles from "./ApproachRow.module.scss";

export default function ApproachRow({ item }: { item: ApproachItem}) {
    /** パターンA：本文左・画像右 */
    if (item.layout === "side") {
        return (
            <div className={`${styles.row} ${styles.side}`}>
                <div>
                    <h3 className={styles.heading}>{item.heading}</h3>
                    <p className={styles.body}>{item.body}</p>
                </div>
                <div className={styles.image} aria-hidden="true" />
            </div>
        );
    }

    return (
        <div className={styles.row}>
            <div>
                <h3 className={styles.heading}>{item.heading}</h3>
                <p className={styles.body}>{item.body}</p>
            </div>
            <div className={styles.images}>
                <div className={styles.image} aria-hidden="true" />
                <div className={styles.image} aria-hidden="true" />
            </div>
        </div>
    )
}