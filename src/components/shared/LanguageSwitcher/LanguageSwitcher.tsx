import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import type { Language } from "../../../context/LanguageContextDefinition";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div
      className={styles.languageSwitcher}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        className={`${styles.langButton} ${language === "en" ? styles.active : ""}`}
        onClick={() => handleLanguageChange("en")}
        aria-pressed={language === "en"}
        aria-label="Switch to English"
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
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
