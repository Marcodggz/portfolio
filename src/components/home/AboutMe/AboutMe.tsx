import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import styles from "./AboutMe.module.css";

const AboutMe: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].home;

  // Use tablet-specific text at smaller viewports to avoid redundancy
  const [isTablet, setIsTablet] = React.useState(false);
  const lead = isTablet ? t.aboutLeadTablet : t.aboutLead;

  React.useEffect(() => {
    const checkViewport = () => {
      setIsTablet(window.innerWidth <= 1024);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <section className={styles.aboutMe} aria-label={t.aboutHeading}>
      <div className={styles.copy}>
        <p>{lead}</p>
        <p>{t.aboutDetails}</p>
        <p>{t.aboutApproach}</p>
      </div>
    </section>
  );
};

export default AboutMe;
