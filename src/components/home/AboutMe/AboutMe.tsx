import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe: React.FC = () => {
  return (
    <section className={styles.aboutMe} aria-labelledby="about-heading">
      <h2 id="about-heading">About</h2>
      <p>
        Software Engineer focused on writing clean, high-performance code and
        building reliable digital products. I care about technical quality,
        product thinking, system efficiency, edge cases, and maintainability.
        Driven by continuous learning, agile workflows, and shipping well-tested
        software.
      </p>
    </section>
  );
};

export default AboutMe;
