import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Responsive Web Design",
      "CSS Animations",
      "Framer Motion"
    ]
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "VS Code"
    ]
  },
  {
    title: "Networking & Cloud Knowledge",
    skills: [
      "CCNA",
      "CCNP",
      "RHCE",
      "AWS Fundamentals"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>
        My <span>Skills</span>
      </h2>

      <div className={styles.container}>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className={styles.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.categoryTitle}>
              {category.title}
            </h3>

            <div className={styles.skillsList}>
              {category.skills.map((skill, i) => (
                <span key={i} className={styles.skillItem}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;