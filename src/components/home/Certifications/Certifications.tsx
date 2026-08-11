import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import { certifications } from "../../../data/certifications";
import styles from "./Certifications.module.css";

const Certifications: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <section className={styles.certifications} aria-labelledby="cert-heading">
      <h2 id="cert-heading">{t.certificationsHeading}</h2>
      <div className={styles.certList}>
        {certifications.map((cert) => (
          <div key={cert.name} className={styles.certItem}>
            <div className={styles.certName}>{cert.name}</div>
            <div className={styles.certIssuer}>
              {cert.issuer}
              {cert.inProgress && (
                <span aria-label={t.inProgress}> ({t.inProgress})</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
