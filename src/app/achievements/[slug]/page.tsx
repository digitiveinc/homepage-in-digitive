import { getAchievements, getAchievement } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const achievements = await getAchievements()
  return achievements.map((achievement) => ({
    slug: achievement.slug,
  }))
}

export default async function AchievementDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const achievement = await getAchievement(params.slug)

  if (!achievement) {
    notFound()
  }

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/achievements"
          className="text-primary hover:text-primary-dark transition-colors mb-8 flex items-center gap-2"
        >
          ← Back to Achievements
        </Link>

        <div className="mb-12">
          <div className="h-96 rounded-lg overflow-hidden mb-8 bg-dark-surface">
            {achievement.image ? (
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-dark-text-secondary bg-gradient-to-br from-primary/20 to-secondary/20">
                [Image]
              </div>
            )}
          </div>

          <p className="text-primary text-sm font-bold mb-4">
            {achievement.client}
          </p>
          <h1 className="text-4xl font-900 mb-4">{achievement.title}</h1>
          <p className="text-xl text-dark-text-secondary mb-8">
            {achievement.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-12 p-6 bg-dark-surface rounded-lg border border-dark-text/10">
            <div>
              <p className="text-dark-text-secondary text-sm mb-2">Date</p>
              <p className="text-lg font-bold">{achievement.date}</p>
            </div>
            <div>
              <p className="text-dark-text-secondary text-sm mb-2">Category</p>
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

          <div>
            <h2 className="text-2xl font-bold mb-4">Services Provided</h2>
            <ul className="space-y-2">
              {achievement.services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-2 text-dark-text-secondary"
                >
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-text/10 pt-12 mt-12">
          <h2 className="text-2xl font-bold mb-6">More Achievements</h2>
          <Link
            href="/achievements"
            className="inline-block px-8 py-4 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary-dark transition-all"
          >
            View All Achievements
          </Link>
        </div>
      </section>
    </main>
  )
}
