import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import { skills } from "../../../data/skills";
import styles from "./Skills.module.css";

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  return (
    <section className={styles.skills} aria-labelledby="skills-heading">
      <h2 id="skills-heading">{t.technologiesHeading}</h2>
      <div className={styles.skillsIcons}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={styles.iconSkill}
            role="img"
            aria-label={skill.label}
            tabIndex={0}
          >
            <i className={skill.iconClass} aria-hidden="true" />
            <span className={styles.caption} aria-hidden="true">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
