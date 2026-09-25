import SectionHeading from "../SectionHeading/SectionHeading";
import TextLink from "@/components/TextLink/TextLink";
import styles from "./About.module.scss";

export default function About() {
    return (
        <section id="about">
            <div className={styles.intro}>
                <SectionHeading number="02">About</SectionHeading>
                <p className={styles.lead}>SESでのサポート業務を経て、「自分の手でつくる側に回りたい」とWeb制作の道へ。個人でサイトを制作・納品しながら、フロントエンドエンジニアを目指して学び続けています。</p>
                <p className={styles.textlink}>
                    <TextLink href="/about">Aboutを見る</TextLink>
                </p>
            </div>
        </section>
    );
}