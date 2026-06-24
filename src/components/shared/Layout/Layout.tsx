import React from 'react'
import Nav from '../Nav/Nav'
import styles from './Layout.module.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.mainContent}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">{children}</main>
    </div>
  )
}

export default Layout
