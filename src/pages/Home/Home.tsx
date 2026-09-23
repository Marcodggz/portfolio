import React from 'react'
import AboutMe from '../../components/home/AboutMe/AboutMe'
import WebDev from '../../components/home/WebDev/WebDev'
import Vision from '../../components/home/Vision/Vision'
import NameCard from '../../components/home/NameCard/NameCard'
import Skills from '../../components/home/Skills/Skills'
import Certifications from '../../components/home/Certifications/Certifications'
import AbstractImage from '../../components/home/AbstractImage/AbstractImage'
import styles from './Home.module.css'

const DESKTOP_LAYOUT_MEDIA_QUERY = '(min-width: 1025px)'

const Home: React.FC = () => {
  const [isDesktopLayout, setIsDesktopLayout] = React.useState(() =>
    typeof window !== 'undefined' &&
      window.matchMedia(DESKTOP_LAYOUT_MEDIA_QUERY).matches,
  )

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_LAYOUT_MEDIA_QUERY)
    const updateLayout = () => setIsDesktopLayout(mediaQuery.matches)

    updateLayout()
    mediaQuery.addEventListener('change', updateLayout)
    return () => mediaQuery.removeEventListener('change', updateLayout)
  }, [])

  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.homeGrid}>
          <div className={styles.aboutMe}>
            <AboutMe />
          </div>
          <div className={styles.abstractImage}>
            {isDesktopLayout && <AbstractImage />}
          </div>
          <div className={styles.webDev}>
            <WebDev />
          </div>
          <div className={styles.nameCard}>
            <NameCard />
          </div>
          <div className={styles.vision}>
            <Vision />
          </div>
          <div className={styles.skills}>
            <Skills />
          </div>
          <div className={styles.certifications}>
            <Certifications />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
