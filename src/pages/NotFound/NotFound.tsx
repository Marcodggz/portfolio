import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../data/translations";
import styles from "./NotFound.module.css";

const NotFound: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].notFound;

  return (
    <section className={styles.notFound} aria-labelledby="not-found-heading">
      <p className={styles.code}>404</p>
      <h1 id="not-found-heading">{t.heading}</h1>
      <p>{t.description}</p>
      <Link className={styles.homeLink} to="/">
        {t.backHome}
      </Link>
    </section>
  );
};

export default NotFound;
