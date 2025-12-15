'use client'

import { Suspense, lazy } from 'react'
import Link from 'next/link'
import { getAchievements, getMembers } from '@/lib/data'
import dynamic from 'next/dynamic'

// Dynamically import 3D components to avoid SSR issues
const ParticleField = dynamic(() => import('@/components/three/ParticleField'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-dark-bg" />,
})

function HomeHeroContent() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <ParticleField count={3000} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-900 mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-lg">
          可能性を解き放つ
        </h1>
        <p className="text-xl md:text-2xl text-dark-text-secondary mb-12 drop-shadow-md">
          DX × AI × クリエイティブで<br />ビジネスの未来を創造する
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Link
            href="/services"
            className="px-8 py-4 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105 drop-shadow-lg"
          >
            サービスを見る
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all drop-shadow-lg"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div className="min-h-screen bg-dark-bg" />}>
        <HomeHeroContent />
      </Suspense>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-900 mb-4 text-center">
          Our Services
        </h2>
        <p className="text-xl text-dark-text-secondary mb-16 text-center max-w-2xl mx-auto">
          DX化、AI導入、クリエイティブ制作で、企業の課題を解決します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-surface rounded-lg p-8 border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
            <div className="w-12 h-12 rounded-lg bg-primary/20 mb-6"></div>
            <h3 className="text-2xl font-bold mb-4">DX/AI支援</h3>
            <p className="text-dark-text-secondary mb-4">
              ビジネスのデジタル化と内製化を支援。AI活用で新しい価値を創出します。
            </p>
            <Link href="/services" className="text-primary font-bold text-sm">
              Learn more →
            </Link>
          </div>

          <div className="bg-dark-surface rounded-lg p-8 border border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/20">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 mb-6"></div>
            <h3 className="text-2xl font-bold mb-4">マーケティング/PR</h3>
            <p className="text-dark-text-secondary mb-4">
              ブランド価値向上と認知度拡大を実現。戦略的なマーケティング支援。
            </p>
            <Link href="/services" className="text-primary font-bold text-sm">
              Learn more →
            </Link>
          </div>

          <div className="bg-dark-surface rounded-lg p-8 border border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20">
            <div className="w-12 h-12 rounded-lg bg-accent/20 mb-6"></div>
            <h3 className="text-2xl font-bold mb-4">クリエイティブ</h3>
            <p className="text-dark-text-secondary mb-4">
              映像、写真、Webサイトなど、クリエイティブで感動を生み出します。
            </p>
            <Link href="/services" className="text-primary font-bold text-sm">
              Learn more →
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-dark-bg transition-all"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12 border border-primary/20 text-center">
          <h2 className="text-4xl font-900 mb-6">
            ビジネスの課題を解決したい？
          </h2>
          <p className="text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto">
            我々のチームが、DX・AI・クリエイティブで、貴社の可能性を引き出します。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </main>
  )
}
