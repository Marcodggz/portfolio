import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav: React.FC = () => {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.navContainer}>
        <ul className={styles.navLinks}>
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
