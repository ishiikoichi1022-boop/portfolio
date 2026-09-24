import { works } from "@/data/works";
import SectionHeading from "../SectionHeading/SectionHeading";
import WorkItem from "./WorkItem";
import styles from "./Works.module.scss";

export default function Works() {
    return (
        <section id="works" className={styles.works}>
            <div className={styles.intro}>
                <SectionHeading number="01">Works</SectionHeading>
                <p className={styles.lead}>私が個人で制作した作品一覧です。</p>
            </div>
            <div className={styles.list}>
                {works.map((work, index) => (
                    <WorkItem key={work.slug} work={work} index={index} total={works.length} />
                ))}
            </div>
        </section>
    );
}