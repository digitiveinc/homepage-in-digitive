'use client'

import Link from 'next/link'

interface NavigationProps {
  onNavigate?: () => void
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/members', label: 'Members' },
    { href: '/apps', label: 'Apps' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-dark-text hover:text-primary transition-colors font-medium text-sm md:text-base"
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}
