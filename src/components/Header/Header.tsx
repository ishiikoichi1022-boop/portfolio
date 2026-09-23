import Link from "next/link"
import styles from "./Header.module.scss"

const navItems = [
    { label: "Works", href: "/#works"},
    { label: "About", href: "/about"},
    { label: "Contact", href: "/#contact"},
];

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    Ishii Koichi
                </Link>
                <nav aria-label="メインナビゲーション">
                    <ul className={styles.nav}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className={styles.navLink}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}