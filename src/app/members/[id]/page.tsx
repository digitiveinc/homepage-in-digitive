import { getMembers, getMember } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export async function generateStaticParams() {
  const members = await getMembers()
  return members.map((member) => ({
    id: member.id,
  }))
}

export default async function MemberDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const member = await getMember(params.id)

  if (!member) {
    notFound()
  }

  return (
    <main className="pt-24 pb-20">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="sticky top-24">
              <div className="h-80 rounded-lg overflow-hidden mb-6 bg-dark-surface relative">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-primary bg-gradient-to-br from-primary/20 to-secondary/20">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-4xl font-900 mb-2">{member.name}</h1>
            <p className="text-2xl text-primary font-bold mb-8">{member.position}</p>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-lg text-dark-text-secondary leading-relaxed">
                {member.bio}
              </p>
            </div>

            {member.social && (member.social.twitter || member.social.linkedin) && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Connect</h2>
                <div className="flex gap-4">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-dark-surface rounded-lg hover:bg-primary hover:text-dark-bg transition-colors"
                    >
                      Twitter
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-dark-surface rounded-lg hover:bg-primary hover:text-dark-bg transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
