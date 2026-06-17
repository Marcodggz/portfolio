import React from 'react'
import styles from './GithubSection.module.css'

const GithubSection: React.FC = () => {
  return (
    <div className={styles.github}>
      <a
        className={styles.url}
        href="https://github.com/Marcodggz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
      >
        <i className="devicon-github-original" aria-hidden="true" />
        <div className={styles.githubText}>
          <h2>Github Profile</h2>
          <p>Find more of my repositories</p>
        </div>
      </a>
    </div>
  )
}

export default GithubSection
