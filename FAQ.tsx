'use client'

import { useState } from 'react'
import styles from './FAQ.module.scss'

const faqs = [
  {
    question: 'Hoe snel zie ik resultaten?',
    answer: 'Eerste resultaten zijn meestal zichtbaar binnen 1-2 maanden. Significante impact (zoals merkbekendheid, meer leads, groei) zien de meeste klanten na 3-6 maanden van consistente implementatie. Dit hangt af van jouw specifieke doelen en de gekozen strategie.',
  },
  {
    question: 'Wat zijn de kosten?',
    answer: 'Onze tarieven zijn afhankelijk van jouw specifieke behoeften en doelen. We werken met transparante pakketten en maatwerk oplossingen. Neem contact met ons op voor een vrijblijvend gesprek en een offerte op maat.',
  },
  {
    question: 'Werken jullie met vaste contracten?',
    answer: 'We bieden zowel projectmatige als langdurige samenwerkingen aan. Voor de beste resultaten raden we een langdurige samenwerking aan, maar we kunnen ook korte projecten oppakken. Flexibiliteit staat bij ons centraal.',
  },
  {
    question: 'Op welke platformen zijn jullie actief?',
    answer: 'We werken met alle belangrijke marketing- en social media platformen: Instagram, TikTok, LinkedIn, Facebook, Google Ads, en meer. We kiezen de platformen die het beste passen bij jouw doelgroep en doelen.',
  },
  {
    question: 'Moet ik zelf content maken?',
    answer: 'Nee, dat hoeft niet! We kunnen alles voor je verzorgen: van strategie tot content creatie en uitvoering. Natuurlijk kun je ook zelf content aanleveren als je dat wilt. We passen ons aan jouw wensen aan.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Veelgestelde vragen</h2>
          <p className={styles.intro}>
            Heb je vragen? We hebben de antwoorden. Bekijk hier de meest gestelde vragen 
            over onze diensten en aanpak.
          </p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} ${openIndex === index ? styles.open : ''}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.icon}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ''}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

