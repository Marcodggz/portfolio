import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import { contactLinks } from "../../../data/contact";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].layout.footer;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          © {year} Marco Dominguez
        </p>

        <nav className={styles.socialLinks} aria-label={t.socialLinksLabel}>
          <a
            href={contactLinks.emailHref}
            aria-label={t.emailAriaLabel}
          >
            <i className="fa-solid fa-envelope" aria-hidden="true" />
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.linkedinAriaLabel}
          >
            <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
