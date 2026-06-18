import React from 'react'
import { certifications } from '../../../data/certifications'
import styles from './Certifications.module.css'

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
