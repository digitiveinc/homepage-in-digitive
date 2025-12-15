import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | お問い合わせ | 株式会社digitive',
  description: '株式会社digitiveへのお問い合わせはこちらから。DX化・AI導入・マーケティング・クリエイティブについてのご相談をお受けしています。',
  openGraph: {
    title: 'Contact | お問い合わせ',
    description: '株式会社digitiveへのお問い合わせはこちらから。',
    url: 'https://digitive.jp/contact',
    images: [
      {
        url: 'https://digitive.jp/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://digitive.jp/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
