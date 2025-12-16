'use client'

import { useEffect, useRef } from 'react'
import styles from './Process.module.scss'

const steps = [
  {
    icon: '✍️',
    title: 'Stap 1 - Strategie & Analyse',
    description: 'We duiken diep in jouw merk, markt en doelgroep. Samen ontwikkelen we een data-gedreven strategie die perfect aansluit bij jouw doelen.',
  },
  {
    icon: '🎨',
    title: 'Stap 2 - Creatie & Uitvoering',
    description: 'Van merkidentiteit tot campagnes – we creëren krachtige content en voeren deze uit op de juiste kanalen voor maximale impact.',
  },
  {
    icon: '🚀',
    title: 'Stap 3 - Optimalisatie & Groei',
    description: 'We monitoren, analyseren en optimaliseren continu. Zo versnellen we jouw groei en zorgen we voor blijvende resultaten.',
  },
]

export default function Process() {
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
    <section id="proces" ref={sectionRef} className={styles.process}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Jouw drietrapsraket naar resultaat</h2>
          <p className={styles.intro}>
            Zo simpel werkt het: in slechts drie stappen van strategie naar groei zonder omkijken. 
            Geen to-do-lijstjes voor jou, wel voortgang die je kunt volgen. We testen, leren en 
            draaien bij zodat je merk – en daarmee je omzet – blijft groeien.
          </p>
        </div>
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{step.icon}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

