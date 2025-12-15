import { getServices, getService } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = await getService(params.slug)

  if (!service) {
    return {
      title: 'サービスが見つかりません',
    }
  }

  return {
    title: `${service.name} | サービス | 株式会社digitive`,
    description: service.description,
    openGraph: {
      title: `${service.name} | サービス`,
      description: service.description,
      url: `https://digitive.jp/services/${service.slug}`,
      images: service.image
        ? [
            {
              url: service.image,
              alt: service.name,
            },
          ]
        : [],
    },
    alternates: {
      canonical: `https://digitive.jp/services/${service.slug}`,
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const service = await getService(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/services"
          className="text-primary hover:text-primary-dark transition-colors mb-8 flex items-center gap-2"
        >
          ← Back to Services
        </Link>

        <div className="mb-12">
          <div className="h-96 rounded-lg overflow-hidden mb-8 bg-dark-surface p-8 relative">
            {service.image ? (
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: service.color + '20' }}>
                <div className="text-6xl font-bold" style={{ color: service.color }}>
                  {service.name.charAt(0)}
                </div>
              </div>
            )}
          </div>

          <div
            className="w-12 h-12 rounded-lg mb-6"
            style={{ backgroundColor: service.color }}
          ></div>

          <h1 className="text-4xl font-900 mb-4">{service.name}</h1>
          <p className="text-xl text-dark-text-secondary mb-8">{service.description}</p>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mt-12 mb-6">詳細</h2>
            <p className="text-lg text-dark-text-secondary leading-relaxed">
              {service.details}
            </p>
          </div>

          <div className="mt-12 p-8 bg-dark-surface rounded-lg border border-dark-text/10">
            <h2 className="text-2xl font-bold mb-6">このサービスについて</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.color }}></span>
                <span className="text-dark-text-secondary">
                  企業の経営課題を深く理解した上で、最適なソリューションを提案します
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.color }}></span>
                <span className="text-dark-text-secondary">
                  最新技術と創造性を組み合わせて、ビジネス価値を最大化します
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.color }}></span>
                <span className="text-dark-text-secondary">
                  プロジェクト開始から終了まで、伴走型のサポートを行います
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.color }}></span>
                <span className="text-dark-text-secondary">
                  クライアント企業の内製化も支援し、長期的な成長を実現します
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-text/10 pt-12 mt-12">
          <h2 className="text-2xl font-bold mb-6">お問い合わせ</h2>
          <p className="text-dark-text-secondary mb-6">
            このサービスについてのご質問やご相談は、以下からお気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary-dark transition-all"
          >
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </main>
  )
}
