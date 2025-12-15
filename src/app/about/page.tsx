import { getCompanyInfo } from '@/lib/data'

export default async function AboutPage() {
  const company = await getCompanyInfo()

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-900 mb-4">About Digitive</h1>
        <p className="text-2xl text-dark-text-secondary mb-12">{company.concept}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-dark-text-secondary leading-relaxed">
              {company.mission}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-dark-text-secondary leading-relaxed">
              {company.vision}
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {company.coreValues.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-dark-surface rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <p className="text-lg text-dark-text">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-surface rounded-lg p-8 border border-dark-text/10">
          <h2 className="text-3xl font-bold mb-6">Company Information</h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-dark-text-secondary">Company Name</dt>
              <dd className="text-xl text-dark-text">{company.name}</dd>
            </div>
            <div>
              <dt className="text-dark-text-secondary">CEO</dt>
              <dd className="text-xl text-dark-text">{company.ceoName}</dd>
            </div>
            <div>
              <dt className="text-dark-text-secondary">Founded</dt>
              <dd className="text-xl text-dark-text">{company.founded}</dd>
            </div>
            <div>
              <dt className="text-dark-text-secondary">Address</dt>
              <dd className="text-xl text-dark-text">{company.address}</dd>
            </div>
            <div>
              <dt className="text-dark-text-secondary">Email</dt>
              <dd className="text-xl text-dark-text">{company.email}</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  )
}
