/**
 * Navigation Configuration
 * Centralized navigation structure for header, footer, and site navigation
 */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

// ============================================================================
// MAIN NAVIGATION
// ============================================================================
export const mainNavigation: NavItem[] = [
  { label: '企業', href: '/about' },
  { label: 'サービス', href: '/services' },
  { label: '実績', href: '/achievements' },
  { label: 'メンバー', href: '/members' },
  { label: 'アプリ', href: '/apps' },
] as const;

// ============================================================================
// FOOTER NAVIGATION
// ============================================================================
export const footerNavigation: NavSection[] = [
  {
    title: '企業',
    items: [
      { label: '会社概要', href: '/about' },
      { label: 'メンバー', href: '/members' },
      { label: '実績', href: '/achievements' },
    ],
  },
  {
    title: 'サービス',
    items: [
      { label: 'DX/AI支援', href: '/services#dx-ai' },
      { label: 'マーケティング/PR', href: '/services#marketing' },
      { label: 'クリエイティブ', href: '/services#creative' },
      { label: 'アプリプラットフォーム', href: '/apps' },
    ],
  },
  {
    title: 'その他',
    items: [
      { label: 'お問い合わせ', href: '/contact' },
      { label: 'メールで相談', href: 'mailto:info@digitive.jp' },
    ],
  },
] as const;

// ============================================================================
// BREADCRUMB ROUTES
// ============================================================================
export const breadcrumbRoutes: Record<string, string[]> = {
  '/about': ['ホーム', '企業'],
  '/services': ['ホーム', 'サービス'],
  '/achievements': ['ホーム', '実績'],
  '/members': ['ホーム', 'メンバー'],
  '/apps': ['ホーム', 'アプリ'],
  '/contact': ['ホーム', 'お問い合わせ'],
} as const;

// ============================================================================
// SOCIAL LINKS
// ============================================================================
export const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/digitive',
    icon: 'twitter',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/digitive',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/digitive',
    icon: 'github',
  },
] as const;
