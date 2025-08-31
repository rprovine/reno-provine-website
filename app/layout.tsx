import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Reno Provine | Executive Leadership & AI Transformation',
  description: 'Serial entrepreneur and proven business leader with 20+ years scaling businesses. Now transforming companies with AI-powered strategies. Former CEO who built $2.4M monthly recurring revenue business.',
  keywords: 'executive leadership, AI transformation, business scaling, fractional CEO, turnaround expert, business strategy',
  authors: [{ name: 'Reno Provine' }],
  openGraph: {
    title: 'Reno Provine | Executive Leadership & AI Transformation',
    description: 'Serial entrepreneur and proven business leader transforming companies with AI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`}>
        {children}
        <Script 
          src="https://js-na2.hsforms.net/forms/embed/242173134.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}