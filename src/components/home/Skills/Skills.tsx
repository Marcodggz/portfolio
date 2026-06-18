import React from 'react'
import type { SkillItem } from '../../../types'
import styles from './Skills.module.css'

const skills: SkillItem[] = [
  { name: 'CSS', iconClass: 'devicon-css3-plain', label: 'CSS3' },
  { name: 'Git', iconClass: 'devicon-git-plain', label: 'Git' },
  { name: 'HTML', iconClass: 'devicon-html5-plain', label: 'HTML5' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain', label: 'JavaScript' },
  { name: 'React', iconClass: 'devicon-react-original', label: 'React' },
  { name: 'Figma', iconClass: 'devicon-figma-plain', label: 'Figma' },
  { name: 'Python', iconClass: 'devicon-python-plain', label: 'Python' },
  { name: 'TypeScript', iconClass: 'devicon-typescript-plain', label: 'TypeScript' },
]

const Skills: React.FC = () => {
  return (
    <section className={styles.skills} aria-labelledby="skills-heading">
      <h2 id="skills-heading">Technologies I have worked with</h2>
      <div className={styles.skillsIcons}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={styles.iconSkill}
            role="img"
            aria-label={skill.label}
          >
            <i className={skill.iconClass} aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
