import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: '株式会社digitive | DX・AI・クリエイティブのパートナー',
  description: '可能性を解き放つ。DX化・AI導入・マーケティング・クリエイティブ制作で企業の成長をサポート。',
  keywords: 'DX, AI, マーケティング, クリエイティブ, Webサイト制作',
  openGraph: {
    title: '株式会社digitive',
    description: 'DX・AI・クリエイティブで、ビジネスの課題を解決します。',
    url: 'https://digitive.jp',
    siteName: 'Digitive Inc.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
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
