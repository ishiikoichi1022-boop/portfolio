import type { Metadata } from "next";
import BlockHeading from "@/components/BlockHeading/BlockHeading";
import Button from "@/components/Button/Button"
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import { interests, skills, story, values } from "@/data/about";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "About | Ishii Koichi",
    description: "SESでのサポート業務を経て、「自分の手でつくる側に回りたい」とWeb制作の道へ。個人でサイトを制作・納品しながら、フロントエンドエンジニアを目指して学び続けています。",
}

export default function AboutPage() {
    return (
        <main>
            <article className={styles.article}>
                <h1 className={styles.title}>About</h1>

                <section className={styles.block}>
                    <BlockHeading en="Story" ja="これまでのこと" />
                    <div className={styles.story}>
                        {story.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </section>

                <section className={styles.block}>
                    <BlockHeading en="Skills" ja="できること" />
                    <dl className={styles.skills}>
                        {skills.map((skill) => (
                            <div key={skill.category} className={styles.skill}>
                                <dt>{skill.category}</dt>
                                <dd>{skill.details}</dd>
                                <dd>{skill.level}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                <section className={styles.block}>
                    <BlockHeading en="Values" ja="大切にしていること" />
                    <p className={styles.quote}>{values.quote}</p>
                    <div className={styles.values}>
                        {values.body.map((line) => (
                            <p key={line}>{line}</p>
                        ))}
                    </div>
                </section>

                <section className={styles.block}>
                    <BlockHeading en="Interests" ja="興味・関心のあること" />
                    <div className={styles.interests}>
                        {interests.map((interest) => (
                            <div key={interest.label} className={styles.interest}>
                                <h3 className={styles.interestLabel}>{interest.label}</h3>
                                <div className={styles.interestBody}>
                                    {interest.body.map((line) => (
                                        <p key={line}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className={styles.cta}>
                    <p>
                        実際に手掛けた制作物はWorksから、<br />
                        採用に関するご連絡やご相談はお問い合わせからお気軽にどうぞ。
                    </p>
                    <ButtonGroup label="次に見るページ" className={styles.ctaButtons}>
                        <Button href="/#works">Worksを見る</Button>
                        <Button href="/#contact" variant="outline">お問い合わせ</Button>
                    </ButtonGroup>
                </div>

            </article>
        </main>
    )
}