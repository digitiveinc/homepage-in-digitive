import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apps | アプリケーション | 株式会社digitive',
  description: '株式会社digitiveが開発・提供するアプリケーションをご紹介します。',
  openGraph: {
    title: 'Apps | アプリケーション',
    description: '株式会社digitiveが開発・提供するアプリケーションをご紹介します。',
    url: 'https://digitive.jp/apps',
    images: [
      {
        url: 'https://digitive.jp/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://digitive.jp/apps',
  },
}

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
