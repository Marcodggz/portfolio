import { useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useLanguage } from "./context/useLanguage";
import { translations } from "./data/translations";
import Layout from "./components/shared/Layout/Layout";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [pathname]);

  return null;
}

type PageTitleKey = keyof typeof translations.en.layout.pageTitles;

const getPageTitleKey = (pathname: string): PageTitleKey => {
  switch (pathname) {
    case "/projects":
      return "projects";
    case "/contact":
      return "contact";
    default:
      return "home";
  }
};

function App() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const pageTitleKey = getPageTitleKey(pathname);
    const pageTitle = translations[language].layout.pageTitles[pageTitleKey];
    document.title = `Marco Dominguez — ${pageTitle}`;
  }, [language, pathname]);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
