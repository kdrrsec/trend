'use client'

import { useEffect, useRef } from 'react'
import styles from './Testimonials.module.scss'

const testimonials = [
  {
    quote: 'Samen met Trend Boost hebben we onze merkstrategie volledig vernieuwd. Het resultaat? 200% meer naamsbekendheid en een sterker merk dat opvalt.',
    author: 'Sarah de Vries',
    role: 'Marketing Director',
    company: 'TechStart BV',
  },
  {
    quote: 'Trend Boost heeft ons geholpen om onze social media aanwezigheid naar een hoger niveau te tillen. De resultaten zijn indrukwekkend en de samenwerking verliep soepel.',
    author: 'Mark Jansen',
    role: 'CEO',
    company: 'RetailPro',
  },
  {
    quote: 'Van strategie tot uitvoering – Trend Boost heeft ons geholpen om onze groei te versnellen. Professioneel, resultaatgericht en altijd bereikbaar.',
    author: 'Lisa van der Berg',
    role: 'Founder',
    company: 'GreenEnergy',
  },
]

export default function Testimonials() {
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
    <section ref={sectionRef} className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Wat vinden onze partners van ons</h2>
          <p className={styles.intro}>
            Echte resultaten, echte verhalen. Ontdek wat onze klanten zeggen over de samenwerking met Trend Boost.
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.quote}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20C10 15 12 10 17 10C22 10 25 13 25 18C25 23 22 26 17 26C15 26 13 25 12 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M25 20C25 15 27 10 32 10C37 10 40 13 40 18C40 23 37 26 32 26C30 26 28 25 27 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p className={styles.quoteText}>{testimonial.quote}</p>
              </div>
              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.author}</h4>
                  <p className={styles.authorRole}>{testimonial.role}</p>
                  <p className={styles.authorCompany}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

