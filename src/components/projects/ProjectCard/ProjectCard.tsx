import React from 'react'
import type { ProjectData } from '../../../types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: ProjectData
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className={styles.gridProject}>
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
        <img className={styles.pic} src={project.image} alt={project.imageAlt} />
      </div>

      {/* 3. Description + 4. Tech tags */}
      <div className={styles.projectFlexContainer}>
        <div className={styles.projectHeader}>
          <div className={styles.projectText}>
            <p>{project.description}</p>
          </div>

          <div className={styles.languages}>
            {project.technologies.map((tech) => (
              <div key={tech} className={styles.boxLanguage}>
                <span className={styles.language}>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {project.liveUrl && (
        <div className={styles.linkIcon}>
          <a
            className={styles.url}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live project`}
          >
            <i className="fa-solid fa-link" aria-hidden="true" />
            <span className={styles.btnLabel}>Live</span>
          </a>
        </div>
      )}

      <div className={styles.githubIcon}>
        <a
          className={styles.url}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} GitHub repository`}
        >
          <i className="devicon-github-original" aria-hidden="true" />
          <span className={styles.btnLabel}>GitHub</span>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
