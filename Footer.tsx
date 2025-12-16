'use client'

import styles from './Footer.module.scss'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Navigatie</h3>
            <ul className={styles.links}>
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
                <button onClick={() => scrollToSection('contact')}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <ul className={styles.contactInfo}>
              <li>
                <strong>Adres:</strong><br />
                Voorbeeldstraat 123<br />
                1234 AB Amsterdam
              </li>
              <li>
                <strong>Telefoon:</strong><br />
                <a href="tel:+31201234567">+31 20 123 45 67</a>
              </li>
              <li>
                <strong>E-mail:</strong><br />
                <a href="mailto:info@trendboost.nl">info@trendboost.nl</a>
              </li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Volg ons</h3>
            <ul className={styles.socialLinks}>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Trend Boost. Alle rechten voorbehouden.
          </p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy</a>
            <span>|</span>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}







