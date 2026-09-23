import type { ReactNode } from "react";
import styles from "./Tag.module.scss"

export default function Tag({ children }: { children: ReactNode }) {
    return <span className={styles.tag}>{children}</span>
}