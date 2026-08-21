import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import styles from "./Vision.module.css";

const Vision: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <section className={styles.vision} aria-labelledby="vision-heading">
      <h2 id="vision-heading">
        &quot;
        <span className={styles.visionFirst}>{t.visionFirst}.</span>{" "}
        <span className={styles.visionSecond}>{t.visionSecond}</span>
        &quot;
      </h2>
    </section>
  );
};

export default Vision;
