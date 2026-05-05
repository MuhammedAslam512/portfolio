import { useEffect } from "react";
import styles from "./Footer.module.css";
import { readTransformValue } from "framer-motion";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                © {new Date().getFullYear()} Your Aslam.
                Built with React & passion for frontend development.
            </p>
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

