'use client'

import { useEffect, useRef } from 'react'
import styles from './Clients.module.scss'

const clients = [
  'TechStart',
  'RetailPro',
  'GreenEnergy',
  'FoodCorp',
  'FinanceHub',
  'HealthPlus',
  'InnovateLab',
  'CloudSolutions',
  'DataDrive',
  'SmartScale',
  'FutureTech',
  'NextGen',
]

export default function Clients() {
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
      const logos = sectionRef.current.querySelectorAll(`.${styles.logo}`)
      logos.forEach((logo) => observer.observe(logo))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={styles.clients}>
      <div className={styles.container}>
        <h2 className={styles.title}>Een greep uit onze klanten</h2>
        <div className={styles.grid}>
          {clients.map((client, index) => (
            <div key={index} className={styles.logo}>
              <span>{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}







