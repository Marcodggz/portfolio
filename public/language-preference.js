try {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (savedLanguage === "en" || savedLanguage === "es") {
    document.documentElement.lang = savedLanguage;
  }
} catch {
  // Ignore storage access errors and keep the default language.
}
