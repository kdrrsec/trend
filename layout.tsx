import type { Metadata } from 'next'
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: 'Trend Boost - Marketing & Branding Agency',
  description: 'Boost jouw merk. Boost jouw groei. Trend Boost is een marketing- en brandingbureau gespecialiseerd in merkstrategie, marketing, social media, campagnes en websites.',
  keywords: 'marketing, branding, merkstrategie, social media, campagnes, websites, marketingbureau',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}







