import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./Hero.module.css";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background Circles */}
      <div className={styles.background}>
        <div className={styles.circle} style={{ top: "10%", left: "10%" }}></div>
        <div className={styles.circle} style={{ top: "60%", left: "80%" }}></div>
        <div className={styles.circle} style={{ top: "80%", left: "20%" }}></div>
      </div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={styles.title}
          >
            Hi, I'm <span className={styles.highlight}>Muhammed Aslam</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={styles.typing}
          >
            <span>{text}</span>
            <span className={styles.cursor}>|</span>
          </motion.div>

          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={styles.description}
          >
            I build exceptional digital experiences that make people's lives easier.
          </motion.p> */}
          <p className={styles.description}>
            Frontend Developer specializing in building responsive, modern,
            and user-friendly web applications using HTML, CSS, JavaScript, and React.
            Passionate about clean UI, smooth animations, and great user experience.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className={styles.buttons}
          >
            <a href="#projects" className={styles.btnPrimary}>
              View Projects
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className={styles.socials}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className={styles.scrollIndicator}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;