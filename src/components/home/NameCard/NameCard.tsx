import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import styles from "./NameCard.module.css";

const NameCard: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <div className={styles.nameCard} data-language={language}>
      <div className={styles.mark} aria-hidden="true">
        <svg className={styles.markGlyph} viewBox="0 0 73 52" focusable="false">
          <path className={styles.markPath} d="M6 44V8l15 19L36 8v36" />
          <path
            className={styles.markPath}
            d="M36 8h10c13 0 21 7 21 18s-8 18-21 18H36"
          />
          <path className={styles.markAccent} d="M36 8v36" />
        </svg>
      </div>
      <div className={styles.identity}>
        <h1 className={styles.name}>Marco Dominguez</h1>
        <p className={styles.role}>{t.softwareEngineer}</p>
      </div>
    </div>
  );
};

export default NameCard;
