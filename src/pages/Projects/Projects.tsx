import React from "react";
import { useLanguage } from "../../context/useLanguage";
import { translations } from "../../data/translations";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/projects/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const projectRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [visibleProjects, setVisibleProjects] = React.useState<Set<number>>(
    () =>
      typeof IntersectionObserver === "undefined"
        ? new Set(projects.map((_, index) => index))
        : new Set([0]),
  );
  const hasReachedNextProject = visibleProjects.has(1);

  React.useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleProjects((current) => {
          const next = new Set(current);
          entries.forEach((entry) => {
            const index = Number(
              (entry.target as HTMLElement).dataset.projectIndex,
            );
            if (entry.isIntersecting) next.add(index);
          });
          return next;
        });
      },
      { threshold: 0.16 },
    );

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToNextProject = (index: number) => {
    const nextProject = projectRefs.current[index + 1];
    if (!nextProject) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    nextProject.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-heading"
    >
      <h1 id="projects-heading" className="sr-only">
        {t.heading}
      </h1>
      <div className={styles.projectsContainer}>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              ref={(element) => {
                projectRefs.current[index] = element;
              }}
              data-project-index={index}
              style={
                {
                  "--project-index": index,
                } as React.CSSProperties
              }
              className={`${styles.projectReveal} ${visibleProjects.has(index) || index === 0 ? styles.projectVisible : ""}`}
            >
              <ProjectCard project={project} priority={index === 0} />
              {index === 0 && (
                <button
                  className={`${styles.scrollIndicator} ${hasReachedNextProject ? styles.scrollIndicatorHidden : ""}`}
                  type="button"
                  onClick={() => scrollToNextProject(index)}
                  aria-label={`${t.scrollTo} ${projects[index + 1].title}`}
                >
                  <span>{t.scroll}</span>
                  <i className="fa-solid fa-arrow-down" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
