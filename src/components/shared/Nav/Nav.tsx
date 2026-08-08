import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

const PILL_TRANSITION =
  "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), width 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

const Nav: React.FC = () => {
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Measures the active link position to update pill indicator
  const measure = useCallback(() => {
    const container = containerRef.current;
    const list = listRef.current;
    if (!container || !list) return;

    const activeLink =
      list.querySelector("a.active") ?? list.querySelector("a");

    if (!activeLink) return;

    const containerRect = container.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    const x = linkRect.left - containerRect.left;
    const y = linkRect.top - containerRect.top;
    const w = linkRect.width;
    const h = linkRect.height;

    container.style.setProperty("--pill-x", `${x}px`);
    container.style.setProperty("--pill-y", `${y}px`);
    container.style.setProperty("--pill-w", `${w}px`);
    container.style.setProperty("--pill-h", `${h}px`);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [pathname, measure]);

  useEffect(() => {
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => measure());
    if (containerRef.current) observer.observe(containerRef.current);
    if (listRef.current) observer.observe(listRef.current);
    return () => observer.disconnect();
  }, [measure]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const raf = requestAnimationFrame(() => {
      container.style.setProperty("--pill-transition", PILL_TRANSITION);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.navContainer} ref={containerRef}>
        <span className={styles.pill} aria-hidden="true" />
        <ul className={styles.navLinks} ref={listRef}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
