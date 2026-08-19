import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import { contactLinks } from "../../../data/contact";
import styles from "./LinkedInSection.module.css";

const LinkedInSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <div className={styles.linkedin}>
      <a
        className={styles.url}
        href={contactLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.linkedinAriaLabel}
      >
        <i className="devicon-linkedin-plain" aria-hidden="true" />
      </a>
    </div>
  );
};

export default LinkedInSection;
