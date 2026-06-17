import React from 'react'
import styles from './EmailSection.module.css'

const EmailSection: React.FC = () => {
  return (
    <div className={styles.emailSection}>
      <p className={styles.email}>
        <a href="mailto:marcodmgzgil@gmail.com?subject=Mail%20from%20your%20portfolio">
          <i className="fa-solid fa-envelope" aria-hidden="true" />
          marcodmgzgil@gmail.com
        </a>
      </p>
    </div>
  )
}

export default EmailSection
