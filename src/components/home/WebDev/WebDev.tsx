import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import styles from "./WebDev.module.css";

const WebDev: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <div className={styles.webDev} data-language={language}>
      <h2>{t.softwareEngineer}</h2>
    </div>
  );
};

export default WebDev;
