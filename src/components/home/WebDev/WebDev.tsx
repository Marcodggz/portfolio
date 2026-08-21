import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import styles from "./WebDev.module.css";

const WebDev: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <section className={styles.webDev} data-language={language} aria-labelledby="web-dev-heading">
      <h2 id="web-dev-heading">{t.softwareEngineer}</h2>
    </section>
  );
};

export default WebDev;
