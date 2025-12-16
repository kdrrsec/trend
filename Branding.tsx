'use client'

import { useEffect, useRef } from 'react'
import styles from './Branding.module.scss'

const services = [
  {
    title: 'Merkstrategie',
    description: 'We ontwikkelen een sterke merkstrategie die aansluit bij jouw doelgroep en jouw bedrijfsdoelen. Van positionering tot merkwaarden en brand story.',
  },
  {
    title: 'Huisstijl & brand design',
    description: 'Een krachtige visuele identiteit die jouw merk onderscheidt. Logo, kleuren, typografie en alle brand assets die je nodig hebt.',
  },
  {
    title: 'Employer branding',
    description: 'Maak jouw bedrijf aantrekkelijk voor talent. We helpen je om jouw werkgeversmerk te versterken en de juiste mensen aan te trekken.',
  },
]

export default function Branding() {
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
    <section id="diensten" ref={sectionRef} className={styles.branding}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Branding</h2>
          <p className={styles.intro}>
            Een sterk merk is de basis van elke succesvolle marketingstrategie.
            We helpen je om een merk te bouwen dat opvalt, blijft hangen en groeit.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
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







