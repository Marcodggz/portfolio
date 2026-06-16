import React from 'react'
import styles from './AboutMe.module.css'

const AboutMe: React.FC = () => {
  return (
    <section className={styles.aboutMe} aria-labelledby="about-heading">
      <h2 id="about-heading">Who Am I?</h2>
      <p>
        I got into programming thanks to friends who opened up this world for me — and I
        haven&apos;t stopped since. I&apos;m passionate about learning and growing, both on my
        own and from the people around me. For me, building things on the web is a way to keep
        challenging myself and turn ideas into something real.
      </p>
    </section>
  )
}

export default AboutMe
