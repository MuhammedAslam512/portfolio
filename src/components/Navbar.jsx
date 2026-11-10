import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <a href="#home" className={styles.logo}>
          dongli<span className={styles.dot}>.</span>
        </a>

        {/* Navigation Links */}
        <div className={styles.navGroup}>
          <ul className={styles.links}>
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>

          {/* Resume CTA Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            <span>Resume</span>
            <span className={styles.icon}>📄</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;