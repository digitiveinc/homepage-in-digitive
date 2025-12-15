'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { COLORS, SPACING } from '@/lib/constants'
import { textStyles, sectionStyles, cardStyles, gridStyles, gradientStyles, componentStyles } from '@/lib/styles'
import { mainNavigation } from '@/lib/navigation'

// Dynamically import 3D components to avoid SSR issues
const ParticleField = dynamic(() => import('@/components/three/ParticleField'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-dark-bg" />,
})

/**
 * Hero Section
 * Eye-catching introduction with 3D particle effects
 */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <ParticleField count={3000} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <div>
          <h1 className={`${textStyles.h1} ${gradientStyles.primary} drop-shadow-lg`}>
            可能性を解き放つ
          </h1>
          <p className={`${textStyles.body} text-xl md:text-2xl drop-shadow-md`}>
            DX × AI × クリエイティブで<br />ビジネスの未来を創造する
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-6 justify-center flex-wrap pt-8">
          <Link
            href="/services"
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105 drop-shadow-lg"
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
    </section>
  )
}

/**
 * Services Section
 * Showcase the three main service offerings
 */
function ServicesSection() {
  const services = [
    {
      title: 'DX/AI支援',
      description: 'ビジネスのデジタル化と内製化を支援。AI活用で新しい価値を創出します。',
      href: '/services#dx-ai',
      borderColor: 'border-primary/20',
      hoverColor: 'hover:border-primary/50',
      bgColor: 'bg-primary/20',
      shadowColor: 'hover:shadow-primary/20',
    },
    {
      title: 'マーケティング/PR',
      description: 'ブランド価値向上と認知度拡大を実現。戦略的なマーケティング支援。',
      href: '/services#marketing',
      borderColor: 'border-secondary/20',
      hoverColor: 'hover:border-secondary/50',
      bgColor: 'bg-secondary/20',
      shadowColor: 'hover:shadow-secondary/20',
    },
    {
      title: 'クリエイティブ',
      description: '映像、写真、Webサイトなど、クリエイティブで感動を生み出します。',
      href: '/services#creative',
      borderColor: 'border-accent/20',
      hoverColor: 'hover:border-accent/50',
      bgColor: 'bg-accent/20',
      shadowColor: 'hover:shadow-accent/20',
    },
  ]

  return (
    <section className={`${sectionStyles.container} ${sectionStyles.padding}`}>
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className={`${textStyles.h2}`}>Our Services</h2>
        <p className={`${textStyles.body} text-xl max-w-2xl mx-auto`}>
          DX化、AI導入、クリエイティブ制作で、企業の課題を解決します。
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className={gridStyles.auto3}>
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`${cardStyles.elevated} ${service.borderColor} ${service.hoverColor} ${service.shadowColor}`}
          >
            <div className={`w-12 h-12 rounded-lg ${service.bgColor} mb-6`} />
            <h3 className={textStyles.h4}>{service.title}</h3>
            <p className={`${textStyles.body} mb-6`}>{service.description}</p>
            <Link
              href={service.href}
              className="inline-flex items-center text-primary font-bold text-sm hover:text-accent transition-colors group"
            >
              サービス詳細へ <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-16">
        <Link
          href="/services"
          className="inline-block px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-dark-bg transition-all transform hover:scale-105"
        >
          すべてのサービスを見る
        </Link>
      </div>
    </section>
  )
}

/**
 * Features Section
 * Highlight key company strengths
 */
function FeaturesSection() {
  const features = [
    {
      number: '01',
      title: '最先端の技術',
      description: 'React、Next.js、Three.jsなど最新技術を活用したDXソリューション',
    },
    {
      number: '02',
      title: 'クリエイティブ力',
      description: 'デザインと機能を融合させた、ユーザーに愛されるプロダクト',
    },
    {
      number: '03',
      title: '伴走型サポート',
      description: 'プロジェクト開始から完了まで、継続的なサポートを提供',
    },
  ]

  return (
    <section className={`${sectionStyles.container} ${sectionStyles.padding} bg-gradient-to-b from-dark-bg via-dark-surface/20 to-dark-bg`}>
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className={textStyles.h2}>Why Choose Digitive?</h2>
        <p className={`${textStyles.body} text-xl max-w-2xl mx-auto`}>
          我々だからこそできる3つのアプローチ
        </p>
      </div>

      {/* Features Grid */}
      <div className={gridStyles.auto3}>
        {features.map((feature, idx) => (
          <div key={idx} className={`${cardStyles.neon} text-center space-y-4`}>
            <div className={`${gradientStyles.primary} text-4xl font-black`}>
              {feature.number}
            </div>
            <h3 className={textStyles.h4}>{feature.title}</h3>
            <p className={textStyles.body}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/**
 * CTA Section
 * Final call-to-action to drive conversions
 */
function CTASection() {
  return (
    <section className={`${sectionStyles.container} ${sectionStyles.padding}`}>
      <div className={componentStyles.ctaSection.container}>
        <h2 className={componentStyles.ctaSection.title}>
          プロジェクトについてお気軽にご相談ください
        </h2>
        <p className={componentStyles.ctaSection.description}>
          DX・AI・クリエイティブでビジネスの課題を解決します。まずはご相談からどうぞ。
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-primary text-dark-bg font-bold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
        >
          今すぐ相談する
        </Link>
      </div>
    </section>
  )
}

/**
 * Main Home Page
 */
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen bg-dark-bg" />}>
        <HeroSection />
      </Suspense>

      <ServicesSection />

      <FeaturesSection />

      <CTASection />
    </main>
  )
}
