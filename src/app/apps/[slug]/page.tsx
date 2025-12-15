import { getApps, getApp } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const apps = await getApps()
  return apps.map((app) => ({
    slug: app.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const app = await getApp(params.slug)

  if (!app) {
    return {
      title: 'アプリケーションが見つかりません',
    }
  }

  return {
    title: `${app.name} | アプリケーション | 株式会社digitive`,
    description: app.description,
    openGraph: {
      title: `${app.name} | アプリケーション`,
      description: app.description,
      url: `https://digitive.jp/apps/${app.slug}`,
      images: app.icon
        ? [
            {
              url: app.icon,
              alt: app.name,
            },
          ]
        : [],
    },
    alternates: {
      canonical: `https://digitive.jp/apps/${app.slug}`,
    },
  }
}

export default async function AppDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const app = await getApp(params.slug)

  if (!app) {
    notFound()
  }

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/apps"
          className="text-primary hover:text-primary-dark transition-colors mb-8 flex items-center gap-2"
        >
          ← Back to Apps
        </Link>

        <div className="mb-12">
          <div className="h-96 rounded-lg overflow-hidden mb-8 bg-dark-surface p-8 flex items-center justify-center border border-dark-text/10 relative">
            {app.icon ? (
              <Image
                src={app.icon}
                alt={app.name}
                width={300}
                height={300}
                className="max-h-full max-w-full"
              />
            ) : (
              <div className="text-6xl font-bold text-primary">
                {app.name.charAt(0)}
              </div>
            )}
          </div>

          <h1 className="text-4xl font-900 mb-4">{app.name}</h1>
          <p className="text-xl text-dark-text-secondary mb-8">
            {app.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {app.downloadLinks.ios && (
              <a
                href={app.downloadLinks.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-dark-surface border border-primary rounded-lg hover:bg-primary hover:text-dark-bg transition-colors text-center font-bold"
              >
                Download on App Store
              </a>
            )}
            {app.downloadLinks.android && (
              <a
                href={app.downloadLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-dark-surface border border-primary rounded-lg hover:bg-primary hover:text-dark-bg transition-colors text-center font-bold"
              >
                Get it on Google Play
              </a>
            )}
            {app.downloadLinks.web && (
              <a
                href={app.downloadLinks.web}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-dark-surface border border-primary rounded-lg hover:bg-primary hover:text-dark-bg transition-colors text-center font-bold"
              >
                Open Web App
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="space-y-3">
                {app.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-dark-text-secondary"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">App Information</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-dark-text-secondary text-sm mb-1">
                    Category
                  </p>
                  <p className="font-bold capitalize">{app.category}</p>
                </div>
                <div>
                  <p className="text-dark-text-secondary text-sm mb-1">
                    Release Date
                  </p>
                  <p className="font-bold">{app.createdAt}</p>
                </div>
              </div>
            </div>
          </div>

          {app.screenshots && app.screenshots.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {app.screenshots.map((screenshot, idx) => (
                  <div
                    key={idx}
                    className="h-64 rounded-lg overflow-hidden bg-dark-surface border border-dark-text/10 relative"
                  >
                    <Image
                      src={screenshot}
                      alt={`Screenshot ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-dark-text/10 pt-12 mt-12">
          <h2 className="text-2xl font-bold mb-6">Explore More Apps</h2>
          <Link
            href="/apps"
            className="inline-block px-8 py-4 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary-dark transition-all"
          >
            View All Apps
          </Link>
        </div>
      </section>
    </main>
  )
}
