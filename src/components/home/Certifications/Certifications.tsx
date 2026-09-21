import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import styles from "./Certifications.module.css";

const Certifications: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <section className={styles.certifications} aria-label={t.availabilityHeading}>
      <div className={styles.actionRow}>
        <div className={styles.availabilityIntro}>
          <span className={styles.statusDot} aria-hidden="true" />
          <p>{t.availabilityIntro}</p>
        </div>
        <div className={styles.actions}>
          <Link className={styles.actionLink} to="/projects">{t.viewProjects}</Link>
          <Link className={styles.actionLink} to="/contact">{t.contactCta}</Link>
        </div>
      </div>
      <dl className={styles.availabilityFacts}>
        {t.availabilityFacts.map((fact) => (
          <div key={fact.label} className={styles.availabilityFact}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Certifications;
