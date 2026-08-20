import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import { contactLinks } from "../../../data/contact";
import styles from "./EmailSection.module.css";

const EmailSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <a
      className={styles.emailSection}
      href={contactLinks.emailHref}
      aria-label={`${t.emailAriaLabel}: ${contactLinks.email}`}
    >
      <i className="fa-solid fa-envelope" aria-hidden="true" />
      <span className={styles.emailText}>{contactLinks.email}</span>
    </a>
  );
};

export default EmailSection;
