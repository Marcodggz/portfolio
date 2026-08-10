import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import styles from "./AboutMe.module.css";

const AboutMe: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <section className={styles.aboutMe} aria-labelledby="about-heading">
      <h2 id="about-heading">{t.aboutHeading}</h2>
      <p>{t.aboutText}</p>
    </section>
  );
};

export default AboutMe;
