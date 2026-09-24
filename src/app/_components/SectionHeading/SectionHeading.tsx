import styles from "./SectionHeading.module.scss"

type SectionHeadingProps = {
    /** "01" のような2桁の番号 */
    number: string;
    children: string;
};

export default function SectionHeading({ number, children }: SectionHeadingProps) {
    return (
        <h2 className={styles.heading}>
            <span className={styles.number} aria-hidden="true">
                {number}
            </span>
            {children}
        </h2>
    );
}