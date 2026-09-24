import Link from "next/link"
import type { ReactNode } from "react";
import styles from "./TextLink.module.scss";

type TextLinkProps = {
    href: string;
    children: ReactNode;
};

export default function TextLink({ href, children }: TextLinkProps) {
    return (
        <Link href={href} className={styles.link}>
            {children}
            <span aria-hidden="true"> →</span>
        </Link>
    );
}