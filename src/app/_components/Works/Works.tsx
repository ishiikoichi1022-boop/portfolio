import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Works.module.scss";

export default function Works() {
    return (
        <section id="works" className={styles.works}>
            <div className={styles.intro}>
                <SectionHeading number="01">Works</SectionHeading>
                <p className={styles.lead}>私が個人で制作した作品一覧です。</p>
            </div>
            {/* 作品エリア */}
        </section>
    )
}