import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import styles from "./GithubSection.module.css";

const GithubSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <div className={styles.github}>
      <a
        className={styles.url}
        href="https://github.com/Marcodggz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.githubAriaLabel}
      >
        <i className="devicon-github-original" aria-hidden="true" />
        <div className={styles.githubText}>
          <h2>{t.githubProfileHeading}</h2>
          <p>{t.githubProfileText}</p>
        </div>
      </a>
    </div>
  );
};

export default GithubSection;
