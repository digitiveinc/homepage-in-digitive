import { getAchievements } from '@/lib/data'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Achievements | 実績紹介 | 株式会社digitive',
  description: '様々なクライアント企業のデジタル変革を支援した実績をご紹介します。',
  openGraph: {
    title: 'Achievements | 実績紹介',
    description: '様々なクライアント企業のデジタル変革を支援した実績をご紹介します。',
    url: 'https://digitive.jp/achievements',
    images: [
      {
        url: 'https://digitive.jp/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://digitive.jp/achievements',
  },
}

export default async function AchievementsPage() {
  const achievements = await getAchievements()

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-900 mb-4">Our Achievements</h1>
        <p className="text-xl text-dark-text-secondary mb-16">
          多くのクライアントの課題解決に携わらせていただいています。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <Link
              key={achievement.id}
              href={`/achievements/${achievement.slug}`}
              className="group"
            >
              <div className="bg-dark-surface rounded-lg overflow-hidden border border-dark-text/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                <div className="h-48 bg-dark-bg relative overflow-hidden">
                  {achievement.image ? (
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-dark-text-secondary">
                      [Image]
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-primary text-sm font-bold mb-2">
                    {achievement.client}
                  </p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-dark-text-secondary text-sm mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {achievement.category.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs px-2 py-1 bg-dark-bg rounded text-dark-text-secondary"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
