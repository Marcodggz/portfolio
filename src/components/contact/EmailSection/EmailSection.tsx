import React from "react";
import styles from "./EmailSection.module.css";

const EmailSection: React.FC = () => {
  return (
    <a
      className={styles.emailSection}
      href="mailto:marcodmgzgil@gmail.com?subject=Mail%20from%20your%20portfolio"
      aria-label="Send email to marcodmgzgil@gmail.com"
    >
      <i className="fa-solid fa-envelope" aria-hidden="true" />
      <span className={styles.emailText}>marcodmgzgil@gmail.com</span>
    </a>
  );
};

export default EmailSection;
