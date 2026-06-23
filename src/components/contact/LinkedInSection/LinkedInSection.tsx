import React from 'react'
import styles from './LinkedInSection.module.css'

const LinkedInSection: React.FC = () => {
  return (
    <div className={styles.linkedin}>
      <a
        className={styles.url}
        href="https://www.linkedin.com/in/marcodggz/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
      >
        <i className="devicon-linkedin-plain" aria-hidden="true" />
      </a>
    </div>
  )
}

export default LinkedInSection
