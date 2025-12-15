'use client'

import Link from 'next/link'
import { useState } from 'react'
import Navigation from './Navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-dark-bg/95 backdrop-blur-lg border-b border-primary/20 shadow-lg shadow-primary/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <span className="relative text-3xl font-900 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              digitive
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Navigation />
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-dark-surface rounded-lg transition-colors relative group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <svg
            className="w-6 h-6 relative z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute top-full left-0 right-0 bg-dark-bg/98 backdrop-blur-lg border-b border-primary/20 md:hidden shadow-xl">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              <Navigation onNavigate={() => setIsOpen(false)} />
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-dark-bg font-bold rounded-lg text-center hover:shadow-lg hover:shadow-primary/50 transition-all"
                onClick={() => setIsOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
