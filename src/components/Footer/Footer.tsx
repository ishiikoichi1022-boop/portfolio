import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <span className={styles.logo}>Ishii Koichi</span>
                <small className={styles.copyright}>&copy; 2026 Ishii Koichi</small>
            </div>
        </footer>
    )
}