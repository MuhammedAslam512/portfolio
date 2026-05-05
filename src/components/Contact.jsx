import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p className={styles.contactText}>
                    I'm currently open to internship and entry-level frontend developer
                    opportunities. If you'd like to collaborate or discuss opportunities,
                    feel free to reach out.
                </p>
                <h2>Contact Me</h2>

                <form className={styles.form}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required />
                    <button type="submit">Feel free to reach out via email or LinkedIn. </button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;