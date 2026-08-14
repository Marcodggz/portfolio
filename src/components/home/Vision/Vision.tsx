import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import styles from "./Vision.module.css";

const Vision: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  // Split the vision text: "Envision it. Build it." or "Imagínalo. Créalo."
  const visionText = t.vision;
  const hasQuotes = visionText.startsWith('"') && visionText.endsWith('"');
  const textWithoutQuotes = hasQuotes ? visionText.slice(1, -1) : visionText;
  const parts = textWithoutQuotes.split(". ");

  return (
    <div className={styles.vision}>
      <h2>
        {hasQuotes && '"'}
        <span className={styles.visionFirst}>{parts[0]}.</span>{" "}
        <span className={styles.visionSecond}>{parts[1]}</span>
        {hasQuotes && '"'}
      </h2>
    </div>
  );
};

export default Vision;
