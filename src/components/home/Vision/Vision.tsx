import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import styles from "./Vision.module.css";

const Vision: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <div className={styles.vision}>
      <h2>{t.vision}</h2>
    </div>
  );
};

export default Vision;
