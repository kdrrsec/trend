'use client'

import { useEffect, useRef } from 'react'
import styles from './Cases.module.scss'

const cases = [
  {
    client: 'TechStart BV',
    title: 'Van merkstrategie naar groei in 6 maanden',
    description: 'Een complete rebranding en marketingstrategie die resulteerde in 150% meer leads en een sterker merk.',
  },
  {
    client: 'RetailPro',
    title: 'Social media campagne met 500% ROI',
    description: 'Een data-gedreven social media campagne die de online verkoop verdrievoudigde binnen 3 maanden.',
  },
  {
    client: 'GreenEnergy',
    title: 'Website redesign met 200% meer conversies',
    description: 'Een moderne website met geoptimaliseerde user experience die de conversie verdubbelde.',
  },
  {
    client: 'FoodCorp',
    title: 'Employer branding die talent aantrekt',
    description: 'Een krachtige employer branding strategie die het aantal sollicitaties met 300% verhoogde.',
  },
  {
    client: 'FinanceHub',
    title: 'Performance marketing met 400% ROI',
    description: 'Een geïntegreerde performance marketing aanpak die de customer acquisition cost met 60% verlaagde.',
  },
  {
    client: 'HealthPlus',
    title: 'Content marketing die autoriteit opbouwt',
    description: 'Een content marketing strategie die de organische traffic met 250% verhoogde en de merkbekendheid vergrootte.',
  },
]

export default function Cases() {
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
    <section id="cases" ref={sectionRef} className={styles.cases}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Ons werk</h2>
          <p className={styles.subtitle}>
            Ontdek hoe we bedrijven helpen om te groeien met krachtige branding en marketing.
          </p>
        </div>
        <div className={styles.grid}>
          {cases.map((caseItem, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImage}>
                <span>{caseItem.client}</span>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.clientName}>{caseItem.client}</span>
                <h3 className={styles.cardTitle}>{caseItem.title}</h3>
                <p className={styles.cardDescription}>{caseItem.description}</p>
                <a href="#" className={styles.cardButton}>
                  Bekijk de case →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <a href="#" className={styles.viewAllButton}>
            Bekijk alle cases
          </a>
        </div>
      </div>
    </section>
  )
}







