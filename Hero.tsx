'use client'

import styles from './Hero.module.scss'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Boost jouw merk.<br />
            Boost jouw groei.
          </h1>
          <p className={styles.subtitle}>
            Trend Boost is een marketing- en brandingbureau dat bedrijven helpt
            om hun merk te versterken en hun groei te versnellen. Van merkstrategie
            tot performance marketing, van social media tot websites – wij zorgen
            ervoor dat jouw merk opvalt en groeit.
          </p>
          <div className={styles.buttons}>
            <button
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={() => scrollToSection('cases')}
            >
              Bekijk ons werk
            </button>
            <button
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={() => scrollToSection('over-ons')}
            >
              Meer weten over ons
            </button>
          </div>
        </div>
        <div className={styles.image}>
          <img 
            src="/images/Trendb1.png" 
            alt="Trend Boost - Marketing & Branding Agency" 
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  )
}







