import React from 'react'
import ProjectCard, { type ProjectData } from '../components/projects/ProjectCard/ProjectCard'
import soonImage from '../assets/soon.jpg'
import styles from './Projects.module.css'

const projects: ProjectData[] = [
  {
    title: 'Coming Soon',
    description:
      'This is a project made in React, it is a school website that has a responsive design and a modern look. y mas cosas que decir con mucho texto para ver como se comporta el diseño con mucho texto. y quizas mas texto para ver como se comporta el diseño con mucho texto..',
    image: soonImage,
    imageAlt: 'Soon',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
    liveUrl: 'https://blank.page',
    githubUrl: 'https://github.com/Marcodggz',
  },
  {
    title: 'Coming soon',
    description:
      'This is a project made in React, it is a school website that has a responsive design and a modern look. y mas cosas que decir con mucho texto para ver como se comporta el diseño con mucho texto. y quizas mas texto para ver como se comporta el diseño con mucho texto.',
    image: soonImage,
    imageAlt: 'Soon',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
    liveUrl: 'https://blank.page',
    githubUrl: 'https://github.com/Marcodggz',
  },
  {
    title: 'Coming Soon',
    description:
      'This is a project made in React, it is a school website that has a responsive design and a modern look. y mas cosas que decir con mucho texto para ver como se comporta el diseño con mucho texto. y quizas mas texto para ver como se comporta el diseño con mucho texto.',
    image: soonImage,
    imageAlt: 'Soon',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
    liveUrl: 'https://blank.page',
    githubUrl: 'https://github.com/Marcodggz',
  },
]

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
