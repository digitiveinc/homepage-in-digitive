import { getServices } from '@/lib/data'
import Link from 'next/link'

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-900 mb-4">Our Services</h1>
        <p className="text-xl text-dark-text-secondary mb-16">
          DX・AI・クリエイティブで、企業の課題を解決します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group"
            >
              <div className="bg-dark-surface rounded-lg p-8 border border-dark-text/10 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                <div
                  className="w-12 h-12 rounded-lg mb-6"
                  style={{ backgroundColor: service.color }}
                ></div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-dark-text-secondary mb-4">
                  {service.description}
                </p>
                <span className="text-primary font-bold text-sm">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
