import React from 'react'
import AboutMe from '../components/home/AboutMe/AboutMe'
import WebDev from '../components/home/WebDev/WebDev'
import Vision from '../components/home/Vision/Vision'
import NameCard from '../components/home/NameCard/NameCard'
import Skills from '../components/home/Skills/Skills'
import Certifications from '../components/home/Certifications/Certifications'
import AbstractImage from '../components/home/AbstractImage/AbstractImage'
import styles from './Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.homeGrid}>
          <div className={styles.aboutMe}>
            <AboutMe />
          </div>
          <div className={styles.abstractImage}>
            <AbstractImage />
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
