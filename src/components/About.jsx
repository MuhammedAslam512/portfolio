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
                    I am a Fullstack Software Engineer with a deep foundation in real-time web applications, multi-tenant SaaS architecture, and cloud deployment pipelines. I specialize in building end-to-end applications—from optimized Express/MongoDB backend APIs and Socket.io real-time document engines to high-performance React user interfaces styled with Tailwind CSS.

                    My background in Computer Engineering and networking (CCNA/CCNP) gives me a strong understanding of HTTP protocols, DNS domain routing, security audit logging, and cloud infrastructure.
                </p>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h3>Frontend Engineering</h3>
                        <p> React 18, Vite, Tailwind CSS, Framer Motion, Context API, Dynamic Interceptors.</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Backend & Real-Time APIs</h3>
                        <p>Node.js, Express.js, Socket.io WebSockets, REST APIs, Redis, MongoDB Aggregations.</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Cloud, DevOps & Networking</h3>
                        <p>GitHub Actions CI/CD, Docker, Stripe Webhooks, Render, Vercel, CCNA/CCNP.</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;