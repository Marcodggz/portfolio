import React from 'react'
import styles from './NameCard.module.css'

const NameCard: React.FC = () => {
  return (
    <div className={styles.nameCard}>
      <div className={styles.circle} aria-label="Marco Dominguez initials">
        MD
      </div>
      <h1>Marco Dominguez</h1>
    </div>
  )
}

export default NameCard
