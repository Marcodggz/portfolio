import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe: React.FC = () => {
  return (
    <section className={styles.aboutMe} aria-labelledby="about-heading">
      <h2 id="about-heading">About</h2>
      <p>
        I'm naturally detail-oriented and I enjoy building useful things. I like
        challenges, problem-solving, and constantly improving how I work. I
        enjoy understanding how things work, experimenting with different
        solutions, and refining the details along the way.
      </p>
    </section>
  );
};

export default AboutMe;
