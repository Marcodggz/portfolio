import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import styles from "./NameCard.module.css";

const NameCard: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <div className={styles.nameCard} data-language={language}>
      <div className={styles.circle} aria-hidden="true">
        MD
      </div>
      <div className={styles.identity}>
        <h1 className={styles.name}>Marco Dominguez</h1>
        <p className={styles.role}>{t.softwareEngineer}</p>
      </div>
    </div>
  );
};

export default NameCard;
