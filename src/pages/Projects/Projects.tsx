import React from "react";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../data/translations";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/projects/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-heading"
    >
      <h1 id="projects-heading" className="sr-only">
        {t.heading}
      </h1>
      <div className={styles.projectsContainer}>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
