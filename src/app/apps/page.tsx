'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getApps, getAppCategories } from '@/lib/data'
import { App } from '@/types'

// Note: This is a client component, so we can't use generateMetadata here.
// Metadata should be set at the route segment level or using redirect with metadata.
export default function AppsPage() {
  const [apps, setApps] = useState<App[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredApps, setFilteredApps] = useState<App[]>([])

  useEffect(() => {
    async function loadData() {
      const appsData = await getApps()
      const categoriesData = await getAppCategories()
      setApps(appsData)
      setCategories(categoriesData)
    }
    loadData()
  }, [])

  useEffect(() => {
    if (selectedCategory) {
      setFilteredApps(apps.filter((app) => app.category === selectedCategory))
    } else {
      setFilteredApps(apps)
    }
  }, [selectedCategory, apps])

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-900 mb-4">App Platform</h1>
        <p className="text-xl text-dark-text-secondary mb-12">
          Digitiveが開発したアプリケーションプラットフォーム。ビジネスからクリエイティブまで、多様なソリューションを提供します。
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-primary text-dark-bg'
                : 'bg-dark-surface text-dark-text hover:bg-dark-surface/80'
            }`}
          >
            All Apps
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-dark-bg'
                  : 'bg-dark-surface text-dark-text hover:bg-dark-surface/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map((app) => (
            <Link key={app.id} href={`/apps/${app.slug}`} className="group">
              <div className="bg-dark-surface rounded-lg p-6 border border-dark-text/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 h-full">
                <div className="w-16 h-16 rounded-lg mb-4 bg-dark-bg flex items-center justify-center overflow-hidden">
                  {app.icon ? (
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-primary">
                      {app.name.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {app.name}
                </h3>
                <p className="text-dark-text-secondary text-sm mb-4 line-clamp-3">
                  {app.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-dark-bg rounded text-dark-text-secondary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <span className="text-primary font-bold text-sm">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredApps.length === 0 && (
          <div className="text-center py-12">
            <p className="text-dark-text-secondary">
              No apps found in this category.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}
