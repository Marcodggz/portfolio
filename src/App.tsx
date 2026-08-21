import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useLanguage } from "./context/useLanguage";
import { translations } from "./data/translations";
import Layout from "./components/shared/Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const Projects = lazy(() => import("./pages/Projects/Projects"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

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
      return pathname === "/" ? "home" : "notFound";
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
      <Suspense
        fallback={
          <div role="status" className="routeLoading">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
