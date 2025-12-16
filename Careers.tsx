'use client'

import { useEffect, useRef } from 'react'
import styles from './Careers.module.scss'

const vacancies = [
  {
    title: 'Senior Marketing Strategist',
    description: 'We zoeken een ervaren marketing strategist die bedrijven helpt om hun groei te versnellen met data-gedreven strategieën.',
  },
  {
    title: 'Creative Brand Designer',
    description: 'Ben jij creatief en strategisch? We zoeken een brand designer die merken tot leven brengt met krachtige visuele identiteiten.',
  },
  {
    title: 'Performance Marketing Specialist',
    description: 'Expert in SEO, SEA en social media advertising? Help onze klanten om hun marketing ROI te maximaliseren.',
  },
  {
    title: 'Account Manager',
    description: 'De schakel tussen klant en team. We zoeken een proactieve account manager die klanten helpt om hun doelen te bereiken.',
  },
]

export default function Careers() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll(`.${styles.card}`)
      cards.forEach((card) => observer.observe(card))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="werken-bij" ref={sectionRef} className={styles.careers}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Werken bij Trend Boost</h2>
          <p className={styles.intro}>
            Bij Trend Boost werk je in een dynamisch team van creatieve en strategische
            professionals. We geloven in groei, ontwikkeling en samenwerking. Samen
            bouwen we aan merken die opvallen en groeien.
          </p>
        </div>
        <div className={styles.grid}>
          {vacancies.map((vacancy, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{vacancy.title}</h3>
              <p className={styles.cardDescription}>{vacancy.description}</p>
              <a href="#" className={styles.cardButton}>
                Bekijk vacature →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}







