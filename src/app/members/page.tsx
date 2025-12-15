import { getMembers } from '@/lib/data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Members | メンバー紹介 | 株式会社digitive',
  description: 'DX・AI・クリエイティブの専門家集団、株式会社digitiveのメンバーをご紹介します。',
  openGraph: {
    title: 'Members | メンバー紹介',
    description: 'DX・AI・クリエイティブの専門家集団、株式会社digitiveのメンバーをご紹介します。',
    url: 'https://digitive.jp/members',
    images: [
      {
        url: 'https://digitive.jp/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://digitive.jp/members',
  },
}

export default async function MembersPage() {
  const members = await getMembers()

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-900 mb-4">Our Team</h1>
        <p className="text-xl text-dark-text-secondary mb-16">
          多様なバックグラウンドを持つプロフェッショナルが、共にビジネスの課題を解決します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <Link
              key={member.id}
              href={`/members/${member.id}`}
              className="group"
            >
              <div className="bg-dark-surface rounded-lg overflow-hidden border border-dark-text/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                <div className="h-64 bg-dark-bg relative overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-dark-text-secondary bg-gradient-to-br from-primary/20 to-secondary/20">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-bold mb-4">
                    {member.position}
                  </p>
                  <p className="text-dark-text-secondary text-sm line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
