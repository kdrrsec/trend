'use client'

import styles from './TrustBadges.module.scss'

const badges = [
  {
    icon: '✓',
    title: 'Data-gedreven',
    description: 'Elke beslissing is gebaseerd op data en inzichten',
  },
  {
    icon: '🎯',
    title: 'Resultaatgericht',
    description: 'We focussen op meetbare resultaten en ROI',
  },
  {
    icon: '⚡',
    title: 'Snel & Flexibel',
    description: 'Snelle implementatie en flexibele aanpak',
  },
  {
    icon: '🤝',
    title: 'Persoonlijk',
    description: 'Maatwerk oplossingen voor elke klant',
  },
]

export default function TrustBadges() {
  return (
    <section className={styles.trustBadges}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {badges.map((badge, index) => (
            <div key={index} className={styles.badge}>
              <div className={styles.icon}>{badge.icon}</div>
              <h3 className={styles.title}>{badge.title}</h3>
              <p className={styles.description}>{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

