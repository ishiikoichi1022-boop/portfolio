import type { ReactNode } from "react";
import styles from "./ButtonGroup.module.scss"

type ButtonGroupProps = {
    children: ReactNode;
    /** 読み上げ用の名前（例：作品の移動） */
    label: string;
    /** 外側の余白など、置く場所ごとの指定 */
    className?: string;
}

export default function ButtonGroup({children, label, className}: ButtonGroupProps) {
    return (
        <nav className={`${styles.group} ${className ?? ""}`} aria-label={label}>
            {children}
        </nav>
    );
}