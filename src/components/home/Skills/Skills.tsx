import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import { skills } from "../../../data/skills";
import styles from "./Skills.module.css";

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;
  const coreSkills = skills.slice(0, 4);
  const supportingSkills = [
    ...skills.slice(4).map((skill) => ({ ...skill, kind: "icon" as const })),
    { name: "agent-workflows", label: t.agentWorkflowsHeading, kind: "ai" as const },
  ];

  return (
    <section className={styles.skills} aria-labelledby="stack-heading">
      <div className={styles.header}>
        <h2 id="stack-heading" className={styles.eyebrow}>{t.coreStack}</h2>
      </div>

      <div className={styles.coreGrid}>
        {coreSkills.map((skill) => (
          <div key={skill.name} className={styles.coreSkill}>
            <img src={skill.icon} alt="" aria-hidden="true" />
            <span>{skill.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.supporting}>
        <p>{t.workflowFoundations}</p>
        <div className={styles.supportingList}>
          {supportingSkills.map((skill) => (
            <span key={skill.name} className={styles.supportingSkill}>
              {skill.kind === "icon" ? (
                <img src={skill.icon} alt="" aria-hidden="true" />
              ) : (
                <span className={styles.aiMark} aria-hidden="true">AI</span>
              )}
              <span>{skill.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
