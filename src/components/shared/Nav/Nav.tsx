import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

// Enables the slide only after the first paint, so the pill doesn't animate
// in from its starting position on load.
const PILL_TRANSITION =
  'transform 0.38s cubic-bezier(0.22, 1, 0.36, 1), width 0.38s cubic-bezier(0.22, 1, 0.36, 1)'

const Nav: React.FC = () => {
  const { pathname } = useLocation()
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  // The links have different widths, so the pill is measured from the active
  // link's real geometry instead of assumed positions.
  const measure = useCallback(() => {
    const container = containerRef.current
    const list = listRef.current
    if (!container || !list) return
    const link = list.querySelector('a.active') ?? list.querySelector('a')
    if (!link) return
    const containerRect = container.getBoundingClientRect()
    const linkRect = link.getBoundingClientRect()
    container.style.setProperty('--pill-x', `${linkRect.left - containerRect.left}px`)
    container.style.setProperty('--pill-y', `${linkRect.top - containerRect.top}px`)
    container.style.setProperty('--pill-w', `${linkRect.width}px`)
    container.style.setProperty('--pill-h', `${linkRect.height}px`)
  }, [])

  // Reposition before paint on route change.
  useLayoutEffect(() => {
    measure()
  }, [pathname, measure])

  // Reposition when the nav resizes (breakpoints, fonts, window size).
  useEffect(() => {
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(() => measure())
    if (containerRef.current) observer.observe(containerRef.current)
    if (listRef.current) observer.observe(listRef.current)
    return () => observer.disconnect()
  }, [measure])

  // Arm the slide transition after the first paint.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const raf = requestAnimationFrame(() => {
      container.style.setProperty('--pill-transition', PILL_TRANSITION)
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.navContainer} ref={containerRef}>
        <span className={styles.pill} aria-hidden="true" />
        <ul className={styles.navLinks} ref={listRef}>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
