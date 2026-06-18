import React from 'react'
import { projects } from '../../data/projects'
import ProjectCard from '../../components/projects/ProjectCard/ProjectCard'
import styles from './Projects.module.css'

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContainer}>
        <div className={styles.flex}>
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
