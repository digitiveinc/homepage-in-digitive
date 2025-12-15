'use client'

import Link from 'next/link'
import companyData from '@/../../data/company.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-bg border-t border-primary/20 mt-32">
      {/* Top CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 rounded-xl p-12 border border-primary/20 backdrop-blur-sm">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-900 mb-4 text-white">
              プロジェクトについてお気軽にご相談ください
            </h3>
            <p className="text-dark-text-secondary text-lg mb-8">
              DX・AI・クリエイティブでビジネスの課題を解決します。
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              今すぐ相談する
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-lg opacity-50"></div>
                <span className="relative text-3xl font-900 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  digitive
                </span>
              </div>
            </div>
            <p className="text-dark-text-secondary text-base mb-6 leading-relaxed">
              {companyData.concept}
            </p>
            <div className="space-y-2">
              <p className="text-dark-text-secondary text-sm">
                <span className="text-primary font-semibold">所在地:</span> {companyData.address}
              </p>
              <p className="text-dark-text-secondary text-sm">
                <span className="text-primary font-semibold">電話:</span> {companyData.phone}
              </p>
              <p className="text-dark-text-secondary text-sm">
                <span className="text-primary font-semibold">メール:</span>{' '}
                <a href={`mailto:${companyData.email}`} className="hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1">
                  {companyData.email}
                </a>
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              企業
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-dark-text-secondary hover:text-primary hover:translate-x-1 transition-all text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1"
                >
                  会社概要
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="text-dark-text-secondary hover:text-primary hover:translate-x-1 transition-all text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1"
                >
                  メンバー
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="text-dark-text-secondary hover:text-primary hover:translate-x-1 transition-all text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1"
                >
                  実績
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              サービス
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-dark-text-secondary hover:text-primary hover:translate-x-1 transition-all text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1"
                >
                  DX/AI支援
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-dark-text-secondary hover:text-primary hover:translate-x-1 transition-all text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1"
                >
                  マーケティング/PR
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-dark-text-secondary hover:text-primary hover:translate-x-1 transition-all text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1"
                >
                  クリエイティブ
                </Link>
              </li>
              <li>
                <Link
                  href="/apps"
                  className="text-dark-text-secondary hover:text-primary hover:translate-x-1 transition-all text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1"
                >
                  アプリプラットフォーム
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              その他
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-dark-text-secondary hover:text-primary hover:translate-x-1 transition-all text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1"
                >
                  お問い合わせ
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-dark-text-secondary hover:text-primary hover:translate-x-1 transition-all text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded px-1"
                >
                  メールで相談
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 pt-12">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <p className="text-dark-text-secondary text-sm">
                © {currentYear} {companyData.name}. All rights reserved.
              </p>
              <p className="text-dark-text-secondary/70 text-xs">
                Built with React, Next.js, Three.js & Tailwind CSS
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-dark-text-secondary hover:text-primary transition-colors text-sm font-medium">
                プライバシーポリシー
              </a>
              <a href="#" className="text-dark-text-secondary hover:text-primary transition-colors text-sm font-medium">
                利用規約
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
