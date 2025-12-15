import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP, Fira_Code } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Font optimization with next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const notoSansJp = Noto_Sans_JP({
  variable: '--font-noto',
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: false,
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://digitive.jp'),
  title: '株式会社digitive | DX・AI・クリエイティブのパートナー',
  description: '可能性を解き放つ。DX化・AI導入・マーケティング・クリエイティブ制作で企業の成長をサポート。',
  keywords: 'DX, AI, マーケティング, クリエイティブ, Webサイト制作, デジタル変革',
  authors: [{ name: 'Digitive Inc.' }],
  creator: 'Digitive Inc.',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://digitive.jp',
    siteName: 'Digitive Inc.',
    title: '株式会社digitive | DX・AI・クリエイティブのパートナー',
    description: 'DX・AI・クリエイティブで、ビジネスの課題を解決します。',
    images: [
      {
        url: 'https://digitive.jp/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digitive Inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社digitive',
    description: 'DX・AI・クリエイティブで、ビジネスの課題を解決します。',
    images: ['https://digitive.jp/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://digitive.jp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning className={`${inter.variable} ${notoSansJp.variable} ${firaCode.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="bg-dark-bg text-dark-text">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
