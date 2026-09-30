"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import Link from "next/link"
import { useRouter } from "next/navigation";
import styles from "./Header.module.scss"

const navItems = [
    { label: "Works", href: "/#works"},
    { label: "About", href: "/about"},
    { label: "Contact", href: "/#contact"},
];

const MENU_ID = "site-menu";

/** breakpoints.scssの$mobile(767px)と合わせる */
const DESKTOP_QUERY = "(min-width: 768px)"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLElement>(null);
    const router = useRouter();

    function openMenu() {
        /** 描画を待たずに反映させ、そのまま最初の項目へフォーカスを移す */
        flushSync(() => setIsOpen(true));
        menuRef.current?.querySelector("a")?.focus();
    }

    async function handleLinkClick(e: MouseEvent<HTMLElement>, href: string) {
        if (!isOpen) return;
        e.preventDefault();
        flushSync(() => setIsOpen(false));
        const animations = menuRef.current?.getAnimations() ?? [];
        await Promise.allSettled(animations.map((animation) => animation.finished));
        router.push(href);
    }

    useEffect(() => {
        if (!isOpen) return;

        /** ヘッダー以外(main・footer)を操作できなくする。Tebがヘッダーとメニューの中だけを巡るようになる */
        const header = buttonRef.current?.closest("header");
        const others = Array.from(header?.parentElement?.children ?? []).filter(
            (el): el is HTMLElement => el !== header && el instanceof HTMLElement
        );
        for (const el of others) el.inert = true;

        /** 背景のスクロールを止める */
        const root = document.documentElement;
        root.style.overflow = "hidden";

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key !== "Escape") return;
            setIsOpen(false);
            buttonRef.current?.focus();
        }

        /** 開いたまま横向きにするなどしてデスクトップ幅になったら閉じる */
        const desktop = window.matchMedia(DESKTOP_QUERY);
        function handleDesktopChange(e: MediaQueryListEvent) {
            if (e.matches) setIsOpen(false);
        }

        document.addEventListener("keydown", handleKeyDown);
        desktop.addEventListener("change", handleDesktopChange);

        return () => {
            for (const el of others) el.inert = false;
            root.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
            desktop.removeEventListener("change", handleDesktopChange);
        }
    }, [isOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo} onClick={(e) => handleLinkClick(e, "/")}>
                    Ishii Koichi
                </Link>
                <button
                    ref={buttonRef}
                    type="button"
                    className={styles.menuButton}
                    aria-expanded={isOpen}
                    aria-controls={MENU_ID}
                    onClick={isOpen ? () => setIsOpen(false) : openMenu}
                >
                    <span className={styles.menuIcon} aria-hidden="true" />
                    {isOpen ? "CLOSE" : "MENU"}
                </button>
                <nav 
                    id={MENU_ID}
                    ref={menuRef}
                    className={styles.menu}
                    data-open={isOpen}
                    aria-label="メインナビゲーション"
                >
                    <ul className={styles.nav}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={styles.navLink}
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                >
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