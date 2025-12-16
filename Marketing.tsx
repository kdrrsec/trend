'use client'

import { useEffect, useRef } from 'react'
import styles from './Marketing.module.scss'

const services = [
  {
    title: 'Marketingstrategie',
    description: 'Een data-gedreven marketingstrategie die jouw doelen bereikt. We analyseren, plannen en optimaliseren voor maximale impact.',
  },
  {
    title: 'Performance marketing',
    description: 'SEO, SEA, Social Media Advertising en CRO. We zorgen voor meetbare resultaten en een optimale ROI op jouw marketingbudget.',
  },
  {
    title: 'Content marketing',
    description: 'Verhalen die werken. Van blogposts tot video\'s, we creëren content die jouw doelgroep raakt en converteert.',
  },
  {
    title: 'Campagnes',
    description: 'Van concept tot uitvoering. We ontwikkelen en voeren campagnes uit die opvallen, inspireren en resultaten opleveren.',
  },
  {
    title: 'AI marketing',
    description: 'Benut de kracht van AI voor slimmere marketing. Van personalisatie tot automatisering en data-analyse.',
  },
  {
    title: 'Websites / Funnels',
    description: 'Moderne websites en conversie-optimalisatie. We bouwen digitale ervaringen die bezoekers omzetten in klanten.',
  },
]

export default function Marketing() {
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
    <section ref={sectionRef} className={styles.marketing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Marketing</h2>
          <p className={styles.intro}>
            Van strategie tot uitvoering. We helpen je om jouw marketing naar
            een hoger niveau te tillen met data-gedreven inzichten en creatieve oplossingen.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                {service.title === 'Performance marketing' ? (
                  <img src="/images/Performance1.png" alt={service.title} className={styles.iconImage} />
                ) : (
                  <span>{service.title.charAt(0)}</span>
                )}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <a href="#" className={styles.cardLink}>
                Lees meer →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}







