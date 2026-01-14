import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bhagat Singh Private Limited India',
  description: 'A non-profit organization dedicated to promoting technical education and open-source contributions in India.',
  keywords: 'non-profit, education, open-source, India, technical, programming, volunteer',
  authors: [{ name: 'Bhagat Singh Private Limited India' }],
  creator: 'Bhagat Singh Private Limited India',
  publisher: 'Bhagat Singh Private Limited India',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bhagat-singh-private-limited-india.github.io/website/',
    siteName: 'Bhagat Singh Private Limited India',
    title: 'Bhagat Singh Private Limited India',
    description: 'A non-profit organization dedicated to promoting technical education and open-source contributions in India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhagat Singh Private Limited India',
    description: 'A non-profit organization dedicated to promoting technical education and open-source contributions in India.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}