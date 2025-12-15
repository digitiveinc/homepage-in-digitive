'use client'

import Link from 'next/link'
import { useState } from 'react'
import Navigation from './Navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-text/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-900 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            digitive
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Navigation />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-dark-surface rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
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
          <nav className="absolute top-full left-0 right-0 bg-dark-bg border-b border-dark-text/10 md:hidden">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
              <Navigation onNavigate={() => setIsOpen(false)} />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
