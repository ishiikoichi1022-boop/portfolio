import Button from "@/components/Button/Button";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.inner}>
                <h1 className={styles.title}>
                    <span className={styles.line}>
                        誰かの「<em className={styles.emphasis}>こうしたい</em>」を、
                    </span>
                    <span className={styles.line}>動くかたちに。</span>
                </h1>
                <p className={styles.lead}>
                    クライアントの要望をヒアリングし、使う人の立場で実装までやり切ります。
                </p>
                <div className={styles.actions}>
                    <Button href="/#works">Worksを見る</Button>
                </div>
            </div>
        </section>
    );
}