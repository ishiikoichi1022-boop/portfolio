import Tag from "@/components/Tag/Tag";
import TextLink from "@/components/TextLink/TextLink";
import type { Work } from "@/data/works/type";
import styles from "./WorkItem.module.scss";

type WorkItemProps= {
    work: Work;
    /** 0 始まりの順番 */
    index: number;
    total: number;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function WorkItem({ work, index, total }: WorkItemProps) {
    return (
        <article className={styles.item}>
            <div className={styles.image} aria-hidden="true" />

            <div className={styles.body}>
                <p className={styles.count}>
                    <span className={styles.countLabel}>works</span>
                    {pad(index + 1)} / {pad(total)}
                </p>
                <h3 className={styles.title}>{work.title}</h3>
                <ul className={styles.tags}>
                    {work.tags.map((tag) => (
                        <li key={tag}>
                            <Tag>{tag}</Tag>
                        </li>
                    ))}
                </ul>
                <p className={styles.summary}>{work.summary}</p>
                <TextLink href={`/works/${work.slug}`}>詳しく見る</TextLink>
            </div>
        </article>
    );
}