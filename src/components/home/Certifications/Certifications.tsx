import React from 'react'
import styles from './Certifications.module.css'

interface Certification {
  name: string
  issuer: string
  inProgress?: boolean
}

const certifications: Certification[] = [
  { name: 'JavaScript', issuer: 'Codecademy' },
  { name: 'Python (Basic)', issuer: 'Codecademy' },
  { name: 'TypeScript', issuer: 'Codecademy' },
  { name: 'Front-End Engineer', issuer: 'Codecademy', inProgress: true },
]

const Certifications: React.FC = () => {
  return (
    <section className={styles.certifications} aria-labelledby="cert-heading">
      <h2 id="cert-heading">Certifications</h2>
      <div className={styles.certList}>
        {certifications.map((cert) => (
          <p key={cert.name} className={styles.certItem}>
            {cert.name} <span>- {cert.issuer}</span>
            {cert.inProgress && (
              <span aria-label="In progress"> (In progress)</span>
            )}
          </p>
        ))}
      </div>
    </section>
  )
}

export default Certifications
