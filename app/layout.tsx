import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Sarah Cils — Produits professionnels extensions de cils',
    template: '%s | Sarah Cils',
  },
  description: 'Produits créés par une lash artist pour les lash artists. Colles, primers, bouquets préfaits. Testés en cabine à Marseille. Formations certifiantes.',
  keywords: ['extensions de cils', 'colle cils professionnelle', 'lash artist marseille', 'formation extensions cils', 'produits cils pro'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.sarahcils.com',
    siteName: 'Sarah Cils',
    images: [{ url: 'https://static.wixstatic.com/media/54d2ff_3c3fa85807c84a5c8041e3bfdee96bff~mv2.png/v1/fill/w_1200,h_630,al_c,q_85/og-image.png', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  verification: { google: 'PLACEHOLDER_GOOGLE_VERIFICATION' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Sarah Cils',
              description: 'Produits professionnels et formations pour techniciens en extensions de cils',
              url: 'https://www.sarahcils.com',
              telephone: '+33677697550',
              email: 'sarahcils@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '320 avenue des Poilus',
                addressLocality: 'Marseille',
                postalCode: '13012',
                addressCountry: 'FR',
              },
              sameAs: ['https://www.instagram.com/saraahcils/'],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
