import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWork, works } from "@/data/works";
import { JetBrains_Mono } from "next/font/google";
import BlockHeading from "@/components/BlockHeading/BlockHeading";
import ApproachRow from "./_components/ApproachRow";
import styles from "./page.module.scss";

/** コードブロック専用。このページでしか使わない */
const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    display: "swap",
});

/** works にない slug は 404 にする */
export const dynamicParams = false;

/** ビルド時に、作品の数だけページを作っておく */
export function generateStaticParams() {
    return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata(
    props: PageProps<"/works/[slug]">,
): Promise<Metadata> {
    const { slug } = await props.params;
    const work = getWork(slug);
    if (!work) return {};

    return {
        title: `${work.title} | Ishii Koichi`,
        description: work.summary,
    };
}

export default async function WorkPage(props: PageProps<"/works/[slug]">) {
    const { slug } = await props.params;
    const work = getWork(slug);
    if (!work) notFound();

    return (
        <main>
            <article className={styles.article}>
                <header>
                    <h1 className={styles.title}>{work.title}</h1>
                    <p className={styles.summary}>{work.summary}</p>

                    <dl className={styles.meta}>
                        <div className={styles.metaRow}>
                            <dt>担当範囲：</dt>
                            <dd>{work.role}</dd>
                        </div>
                        <div className={styles.metaRow}>
                            <dt>使用技術：</dt>
                            <dd>{work.tags.join(" / ")}</dd>
                        </div>
                        <div className={styles.metaRow}>
                            <dt>制作期間：</dt>
                            <dd>{work.period}</dd>
                        </div>

                        {work.url && (
                            <div className={styles.metaRow}>
                                <dt>サイトURL：</dt>
                                <dd>
                                    <a href={work.url} target="_blank" rel="noopener noreferrer">
                                        {work.url}
                                    </a>
                                </dd>
                            </div>
                        )}
                    </dl>
                </header>

                {/** 実画像は 10/10 に next/image へ差し替える */}
                <div className={styles.mainImage} aria-hidden="true" />

                <section className={styles.block}>
                    <BlockHeading en="Challenge" ja="課題・目的" />
                    <p className={styles.text}>{work.challenge}</p>
                </section>

                <section className={styles.block}>
                    <BlockHeading en="Approach" ja="工夫した点" />
                    <div className={styles.approach}>
                        {work.approach.map((item) => (
                            <ApproachRow key={item.heading} item={item} />
                        ))}
                    </div>
                </section>

                <section className={styles.block}>
                    <BlockHeading en="Implementation" ja="実装のポイント" />
                    <pre className={`${styles.code} ${jetbrainsMono.variable}`} tabIndex={0}>
                        <code>{work.implementation.code}</code>
                    </pre>
                    <p className={styles.caption}>{work.implementation.caption}</p>
                </section>
            </article>
        </main>
    );
}