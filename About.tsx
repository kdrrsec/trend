'use client'

import { useEffect, useRef } from 'react'
import styles from './About.module.scss'

const values = [
  'Strategisch',
  'Creatief',
  'Datagedreven',
  'No-nonsense',
  'Resultaatgericht',
  'Klantgericht',
]

const team = [
  { name: 'Sarah de Vries', role: 'Creative Director' },
  { name: 'Mark Jansen', role: 'Marketing Strategist' },
  { name: 'Lisa van der Berg', role: 'Brand Strategist' },
  { name: 'Tom Bakker', role: 'Performance Specialist' },
]

export default function About() {
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
      const elements = sectionRef.current.querySelectorAll(`.${styles.scrollReveal}`)
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="over-ons" ref={sectionRef} className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Over Trend Boost</h2>
          <div className={`${styles.content} ${styles.scrollReveal}`}>
            <p className={styles.intro}>
              Trend Boost is een marketing- en brandingbureau met een missie:
              bedrijven helpen om hun merk te versterken en hun groei te versnellen.
              We combineren strategische inzichten met creatieve oplossingen en
              data-gedreven aanpak om resultaten te leveren die er toe doen.
            </p>
            <p className={styles.intro}>
              Onze aanpak is gebaseerd op diepgaand begrip van jouw merk, jouw
              markt en jouw doelgroep. We werken niet met standaardoplossingen,
              maar ontwikkelen strategieën die perfect aansluiten bij jouw
              unieke situatie en doelen.
            </p>
          </div>
        </div>
        
        <div className={`${styles.values} ${styles.scrollReveal}`}>
          <h3 className={styles.valuesTitle}>Onze kernwaarden</h3>
          <ul className={styles.valuesList}>
            {values.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
        
        <div className={`${styles.team} ${styles.scrollReveal}`}>
          <h3 className={styles.teamTitle}>Ons team</h3>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <div className={styles.avatar}>
                  <span>{member.name.charAt(0)}</span>
                </div>
                <h4 className={styles.memberName}>{member.name}</h4>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}







