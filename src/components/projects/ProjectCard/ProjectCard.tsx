import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import type { ProjectData } from "../../../types";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: ProjectData;
  priority?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, priority = false }) => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  // Get the description from translations based on the descriptionKey
  const description = t[project.descriptionKey as keyof typeof t] as string;

  // Generate a simple kebab-case ID from the project title for styling
  const projectId = project.title.toLowerCase().replace(/['\s]+/g, "-");
  const hasLiveUrl = Boolean(project.liveUrl);

  return (
    <article
      className={styles.gridProject}
      data-project={projectId}
      data-has-live-url={hasLiveUrl}
    >
      {/* 1. Title — first DOM element so it is the first thing read on mobile */}
      <div className={styles.projectTitleArea}>
        <div className={styles.title}>
          <span className={styles.layerIcon} aria-hidden="true">
            <i className="fa-solid fa-layer-group" />
          </span>
          <h2>{project.title}</h2>
        </div>
      </div>

      {/* 2. Screenshot */}
      <div className={styles.projectImages}>
        <img
          className={styles.pic}
          src={project.image}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          data-project-image={projectId}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding={priority ? "sync" : "async"}
        />
      </div>

      {/* 3. Description + 4. Tech tags */}
      <div className={styles.projectFlexContainer}>
        <div className={styles.projectHeader}>
          <div className={styles.projectText}>
            <p>{description}</p>
          </div>

          <div className={styles.languages}>
            {project.technologies.map((tech) => (
              <div
                key={tech}
                className={styles.boxLanguage}
                data-tech={tech.toLowerCase().replace(/[.\s]+/g, "-")}
              >
                <span className={styles.language}>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {project.liveUrl && (
        <a
          className={styles.linkButton}
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.viewLiveProject.replace("{{title}}", project.title)}
        >
          <i className="fa-solid fa-link" aria-hidden="true" />
          <span className={styles.btnLabel}>{t.live}</span>
        </a>
      )}

      <a
        className={styles.githubButton}
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.viewGitHub.replace("{{title}}", project.title)}
      >
        <i className="devicon-github-original" aria-hidden="true" />
        <span className={styles.btnLabel}>{t.github}</span>
      </a>
    </article>
  );
};

export default ProjectCard;
