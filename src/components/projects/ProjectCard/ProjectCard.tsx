import React from 'react'
import styles from './ProjectCard.module.css'

export interface ProjectData {
  title: string
  description: string
  image: string
  imageAlt: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

interface ProjectCardProps {
  project: ProjectData
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className={styles.gridProject}>
      <div className={styles.projectImages}>
        <img className={styles.pic} src={project.image} alt={project.imageAlt} />
      </div>

      <div className={styles.projectFlexContainer}>
        <div className={styles.projectHeader}>
          <div className={styles.projectText}>
            <div className={styles.title}>
              <span className={styles.layerIcon} aria-hidden="true">
                <i className="fa-solid fa-layer-group" />
              </span>
              <h2>{project.title}</h2>
            </div>
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

      <div className={styles.linkIcon}>
        <a
          className={styles.url}
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${project.title}`}
        >
          <i className="fa-solid fa-link" aria-hidden="true" />
        </a>
      </div>

      <div className={styles.githubIcon}>
        <a
          className={styles.url}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub repository for ${project.title}`}
        >
          <i className="devicon-github-original" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
