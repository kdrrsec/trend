'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.scss'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          <img src="/images/Trendb2.png" alt="Trend Boost" className={styles.logoImg} />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <button onClick={() => scrollToSection('diensten')}>
                Onze diensten
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('cases')}>
                Cases
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('over-ons')}>
                Over ons
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('faq')}>
                FAQ
              </button>
            </li>
            <li>
              <button
                className={styles.ctaButton}
                onClick={() => scrollToSection('contact')}
              >
                Contact opnemen
              </button>
            </li>
          </ul>
        </nav>
        <button
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            <li>
              <button onClick={() => scrollToSection('diensten')}>
                Onze diensten
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('cases')}>
                Cases
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('over-ons')}>
                Over ons
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('faq')}>
                FAQ
              </button>
            </li>
            <li>
              <button
                className={styles.mobileCtaButton}
                onClick={() => scrollToSection('contact')}
              >
                Contact opnemen
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

