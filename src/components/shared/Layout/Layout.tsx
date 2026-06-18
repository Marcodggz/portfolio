import React from 'react'
import Nav from '../Nav/Nav'
import styles from './Layout.module.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div id="main-content" className={styles.mainContent}>
      <Nav />
      <main>{children}</main>
    </div>
  )
}

export default Layout
