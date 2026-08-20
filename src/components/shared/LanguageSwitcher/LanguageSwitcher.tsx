import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import type { Language } from "../../../context/LanguageContextDefinition";
import { translations } from "../../../data/translations";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].layout;

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div
      className={styles.languageSwitcher}
      role="group"
      aria-label={t.languageSelector}
    >
      <button
        type="button"
        className={`${styles.langButton} ${language === "en" ? styles.active : ""}`}
        onClick={() => handleLanguageChange("en")}
        aria-pressed={language === "en"}
        aria-label={`EN — ${t.switchToEnglish}`}
      >
        EN
      </button>
      <span className={styles.separator} aria-hidden="true">
        |
      </span>
      <button
        type="button"
        className={`${styles.langButton} ${language === "es" ? styles.active : ""}`}
        onClick={() => handleLanguageChange("es")}
        aria-pressed={language === "es"}
        aria-label={`ES — ${t.switchToSpanish}`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
