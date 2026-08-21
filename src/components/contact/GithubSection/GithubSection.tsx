import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import { contactLinks } from "../../../data/contact";
import styles from "./GithubSection.module.css";
import githubIcon from "../../../assets/icons/github.svg";

const GithubSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <div className={styles.github}>
      <a
        className={styles.url}
        href={contactLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.githubAriaLabel}
      >
        <img src={githubIcon} alt="" aria-hidden="true" />
        <div className={styles.githubText}>
          <h2>{t.githubProfileHeading}</h2>
        </div>
      </a>
    </div>
  );
};

export default GithubSection;
