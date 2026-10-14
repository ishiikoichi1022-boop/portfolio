import type { Metadata } from "next";
import Button from "@/components/Button/Button";
import ButtonGroup from "@/components/ButtonGroup/ButtonGroup";
import styles from "./not-found.module.scss";

export const metadata: Metadata = {
    title: "ページが見つかりません | Ishii Koichi"
};

export default function NotFound() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.text}>お探しのページは見つかりませんでした。URLが間違っているか、ページが移動・削除された可能性があります。</p>
            <ButtonGroup label="ページの移動" className={styles.nav}>
                <Button href="/">トップページに戻る</Button>
                <Button href="/#works" variant="outline">Worksを見る</Button>
            </ButtonGroup>
        </main>
    )
}