import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
    children: ReactNode;
    /** fill = 塗り / outline = 枠線 */
    variant?: "fill" | "outline";
    href?: string;
    onClick?: () => void;
};

function Arrow() {
    return (
        <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden="true">
            <path d="M0 0 L10 6 L0 12 Z" fill="currentColor" />
        </svg>
    );
}

export default function Button({
    children,
    variant = "fill",
    href,
    onClick,
}: ButtonProps) {
    const className = `${styles.button} ${styles[variant]}`;

    if (href) {
        return (
            <Link href={href} className={className}>
                {children}
                <Arrow />
            </Link>
        );
    }

    return (
        <button type="button" className={className} onClick={onClick}>
            {children}
            <Arrow />
        </button>
    )
}