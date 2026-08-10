import React from "react";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../data/translations";
import EmailSection from "../../components/contact/EmailSection/EmailSection";
import LinkedInSection from "../../components/contact/LinkedInSection/LinkedInSection";
import GithubSection from "../../components/contact/GithubSection/GithubSection";
import ContactForm from "../../components/contact/ContactForm/ContactForm";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-heading"
    >
      <h1 id="contact-heading" className="sr-only">
        {t.heading}
      </h1>
      <div className={styles.flexContactContainer}>
        <div className={styles.gridContact}>
          <EmailSection />
          <LinkedInSection />
          <GithubSection />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
