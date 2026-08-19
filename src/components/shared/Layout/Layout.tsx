import React from "react";
import { useLanguage } from "../../../context/useLanguage";
import { translations } from "../../../data/translations";
import Nav from "../Nav/Nav";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();
  const t = translations[language].layout;

  return (
    <div className={styles.mainContent}>
      <a href="#main-content" className={styles.skipLink}>
        {t.skipToMainContent}
      </a>
      <header className={styles.headerWrapper}>
        <div className={styles.navColumn}>
          <Nav />
        </div>
        <div className={styles.languageSwitcherWrapper}>
          <LanguageSwitcher />
        </div>
      </header>
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
