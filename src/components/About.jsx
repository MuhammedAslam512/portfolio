import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className={styles.title}>
                    About <span>Me</span>
                </h2>

                <p className={styles.text}>
                    I am a passionate Frontend Developer focused on creating responsive,
                    accessible, and visually engaging web applications. I enjoy transforming
                    ideas into interactive digital experiences using HTML, CSS, JavaScript,
                    and React.

                    I pay strong attention to clean UI design, performance, and smooth
                    animations to ensure a great user experience across all devices.

                    In addition to frontend development, I have a foundational background
                    in networking and system administration, which helps me better understand
                    how applications interact with infrastructure and cloud environments.

                    I am currently seeking an internship or entry-level opportunity where
                    I can contribute, grow, and continue developing my expertise in
                    frontend technologies.
                </p>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h3>Frontend</h3>
                        <p>React, JavaScript, CSS, Animations</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Backend</h3>
                        <p>Node.js, Express, MongoDB</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Tools</h3>
                        <p>Git, GitHub, Vite, VS Code</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;