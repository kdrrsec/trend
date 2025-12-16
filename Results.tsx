'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Results.module.scss'

const stats = [
  {
    value: 250,
    suffix: '%',
    label: 'Gemiddelde groei',
    description: 'in merkbekendheid',
  },
  {
    value: 180,
    suffix: '%',
    label: 'Meer leads',
    description: 'per maand',
  },
  {
    value: 320,
    suffix: '%',
    label: 'ROI verhoging',
    description: 'op marketingbudget',
  },
]

function CountUp({ end, suffix, start }: { end: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / 2000, 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, start])

  return <>{count}{suffix}</>
}

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section ref={sectionRef} className={styles.results}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Onze resultaten</h2>
          <p className={styles.intro}>
            De cijfers liegen niet. Dit is het resultaat van klanten die consequent werken 
            volgens onze strategie. Van merkbekendheid tot omzet – wij zorgen voor meetbare impact.
          </p>
        </div>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statValue}>
                <CountUp end={stat.value} suffix={stat.suffix} start={isVisible} />
              </div>
              <h3 className={styles.statLabel}>{stat.label}</h3>
              <p className={styles.statDescription}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

