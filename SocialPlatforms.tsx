'use client'

import { useEffect, useRef } from 'react'
import styles from './SocialPlatforms.module.scss'

const platforms = [
  {
    name: 'Instagram',
    description: 'Content, Ads, Influencers',
    icon: '📷',
  },
  {
    name: 'TikTok',
    description: 'Content, Ads, Creators',
    icon: '🎵',
  },
  {
    name: 'LinkedIn',
    description: 'B2B Marketing, Ads',
    icon: '💼',
  },
  {
    name: 'Facebook',
    description: 'Content, Ads, Community',
    icon: '👥',
  },
  {
    name: 'YouTube',
    description: 'Video Content, Ads',
    icon: '▶️',
  },
  {
    name: 'Google Ads',
    description: 'Search, Display, Shopping',
    icon: '🔍',
  },
]

export default function SocialPlatforms() {
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
    <section ref={sectionRef} className={styles.socialPlatforms}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Social media marketing</h2>
          <p className={styles.intro}>
            Naast branding en strategie bieden we verschillende social media diensten aan 
            om je bedrijf een optimale online aanwezigheid te geven, met het beste resultaat.
          </p>
        </div>
        <div className={styles.grid}>
          {platforms.map((platform, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{platform.icon}</div>
              <h3 className={styles.platformName}>{platform.name}</h3>
              <p className={styles.description}>{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

