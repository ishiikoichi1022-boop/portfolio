import Tag from "@/components/Tag/Tag";
import TextLink from "@/components/TextLink/TextLink";
import type { Work } from "@/data/works/type";
import WorkCount from "./WorkCount";
import WorkImage from "@/components/WorkImage/WorkImage"
import styles from "./WorkItem.module.scss";

type WorkItemProps= {
    work: Work;
    /** 0 始まりの順番 */
    index: number;
    total: number;
}

export default function WorkItem({ work, index, total }: WorkItemProps) {
    return (
        <article className={styles.item}>
            <WorkImage image={work.image} variant="card" />

            <div className={styles.body}>
                <WorkCount index={index} total={total} className={styles.count} />
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