'use client'

import Link from 'next/link'
import companyData from '@/../../data/company.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-surface border-t border-dark-text/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-primary font-900 text-2xl mb-4">digitive</h3>
            <p className="text-dark-text-secondary text-sm mb-4">
              可能性を解き放つ
            </p>
            <p className="text-dark-text-secondary text-xs">
              © {currentYear} {companyData.name}. All rights reserved.
            </p>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-bold mb-4 text-dark-text">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-dark-text-secondary hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="text-dark-text-secondary hover:text-primary transition-colors text-sm"
                >
                  実績
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="text-dark-text-secondary hover:text-primary transition-colors text-sm"
                >
                  メンバー
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-dark-text">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-dark-text-secondary hover:text-primary transition-colors text-sm"
                >
                  DX/AI支援
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-dark-text-secondary hover:text-primary transition-colors text-sm"
                >
                  マーケティング
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-dark-text-secondary hover:text-primary transition-colors text-sm"
                >
                  クリエイティブ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-dark-text">お問い合わせ</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-dark-text-secondary hover:text-primary transition-colors text-sm"
                >
                  {companyData.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-dark-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-text/10 pt-6 text-center">
          <p className="text-dark-text-secondary text-xs">
            Built with React, Next.js, Three.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
