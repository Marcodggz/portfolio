import React, { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { LanguageContext } from "./LanguageContextDefinition";
import type { Language } from "./LanguageContextDefinition";

const STORAGE_KEY = "portfolio-language";

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Read from localStorage on initial load
    const stored = localStorage.getItem(STORAGE_KEY);
    // Default to English if not found or invalid
    return stored === "es" ? "es" : "en";
  });

  useEffect(() => {
    // Update localStorage when language changes
    localStorage.setItem(STORAGE_KEY, language);

    // Update <html lang> attribute
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
