import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.sectionTitle}>
        My <span className={styles.highlight}>Projects</span>
      </h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={styles.card}
          >
            <div className={styles.image}>
              <img src={project.image} alt={project.title} />
              <div className={styles.overlay}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tech}>
                {project.tech.map((t, i) => (
                  <span key={i} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;