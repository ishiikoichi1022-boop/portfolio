import SectionHeading from "../SectionHeading/SectionHeading";
import ContactAddress from "./ContactAddress";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <section id="contact">
            <div className={styles.intro}>
                <SectionHeading number="03">Contact</SectionHeading>
                <p className={styles.lead}>採用に関するご連絡やご相談は、こちらまでお気軽にどうぞ。</p>
                <ContactAddress />
                <p className={styles.note}>2～3日を目安にご返信いたします。</p>
            </div>
        </section>
    );
}