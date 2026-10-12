import type { ApproachItem } from "@/data/works";
import WorkImage from "@/components/WorkImage/WorkImage"
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
                <WorkImage image={item.image} variant="side" />
            </div>
        );
    }

    /** パターンB：本文上・画像2枚下 */
    return (
        <div className={styles.row}>
            <div>
                <h3 className={styles.heading}>{item.heading}</h3>
                <p className={styles.body}>{item.body}</p>
            </div>
            <div className={styles.images}>
                <WorkImage image={item.images[0]} variant="half" />
                <WorkImage image={item.images[1]} variant="half" />
            </div>
        </div>
    )
}