import React from 'react'
import AboutMe from '../../components/home/AboutMe/AboutMe'
import WebDev from '../../components/home/WebDev/WebDev'
import Vision from '../../components/home/Vision/Vision'
import NameCard from '../../components/home/NameCard/NameCard'
import Skills from '../../components/home/Skills/Skills'
import Certifications from '../../components/home/Certifications/Certifications'
import AbstractImage from '../../components/home/AbstractImage/AbstractImage'
import { translations } from '../../data/translations'
import { useLanguage } from '../../context/useLanguage'
import styles from './Home.module.css'

const ABSTRACT_COLLAPSIBLE_MEDIA_QUERY =
  '(max-width: 1024px) and (orientation: portrait), (max-width: 600px)'

const Home: React.FC = () => {
  const { language } = useLanguage()
  const t = translations[language].home
  const [isCollapsibleLayout, setIsCollapsibleLayout] = React.useState(() =>
    typeof window !== 'undefined' &&
      window.matchMedia(ABSTRACT_COLLAPSIBLE_MEDIA_QUERY).matches,
  )
  const [isAbstractOpen, setIsAbstractOpen] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(ABSTRACT_COLLAPSIBLE_MEDIA_QUERY)
    const updateLayout = () => {
      setIsCollapsibleLayout(mediaQuery.matches)
      if (mediaQuery.matches) setIsAbstractOpen(false)
    }

    updateLayout()
    mediaQuery.addEventListener('change', updateLayout)
    return () => mediaQuery.removeEventListener('change', updateLayout)
  }, [])

  const shouldRenderAbstract = !isCollapsibleLayout || isAbstractOpen
  const abstractToggleLabel = isAbstractOpen
    ? t.hideInteraction
    : t.exploreInteraction

  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.homeGrid}>
          <div className={styles.aboutMe}>
            <AboutMe />
          </div>
          <div className={styles.abstractImage}>
            <button
              type="button"
              className={styles.abstractToggle}
              aria-expanded={!isCollapsibleLayout || isAbstractOpen}
              aria-controls="abstract-image-panel"
              onClick={() => setIsAbstractOpen((open) => !open)}
            >
              {abstractToggleLabel}
            </button>
            <div
              id="abstract-image-panel"
              className={styles.abstractPanel}
              hidden={!shouldRenderAbstract}
            >
              {shouldRenderAbstract && <AbstractImage />}
            </div>
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
