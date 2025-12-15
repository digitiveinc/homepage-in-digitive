/**
 * Reusable Style Utilities
 * Object-oriented approach for consistent styling across components
 */

import { COLORS, SPACING, TRANSITIONS, BORDER_RADIUS, SHADOWS } from './constants';

// ============================================================================
// BUTTON STYLES
// ============================================================================
export const buttonStyles = {
  primary: `px-8 py-4 bg-gradient-to-r from-${COLORS.primary} to-${COLORS.accent} text-${COLORS.textInverse} font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105`,
  primaryOutline: `px-8 py-4 border-2 border-${COLORS.primary} text-${COLORS.primary} font-bold rounded-lg hover:bg-${COLORS.primary}/10 transition-all`,
  secondary: `px-6 py-3 bg-gradient-to-r from-${COLORS.secondary} to-${COLORS.primary} text-${COLORS.textInverse} font-bold rounded-lg hover:shadow-lg transition-all`,
  minimal: `px-4 py-2 text-${COLORS.textSecondary} hover:text-${COLORS.primary} transition-colors font-medium text-sm`,
} as const;

// ============================================================================
// CARD STYLES
// ============================================================================
export const cardStyles = {
  base: 'bg-dark-surface rounded-lg border border-dark-text/10 p-8 transition-all',
  elevated: 'bg-dark-surface rounded-lg border border-dark-text/10 p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20',
  neon: 'bg-dark-surface/50 rounded-lg border border-primary/20 backdrop-blur-sm p-8 hover:border-primary/50 transition-all',
} as const;

// ============================================================================
// TEXT STYLES
// ============================================================================
export const textStyles = {
  h1: 'text-5xl md:text-7xl font-900 mb-6',
  h2: 'text-4xl md:text-5xl font-900 mb-4 text-center',
  h3: 'text-2xl md:text-3xl font-900 mb-4',
  h4: 'text-xl md:text-2xl font-bold mb-4',
  h5: 'text-lg font-bold mb-3',
  h6: 'text-base font-bold mb-2',
  body: 'text-base text-dark-text-secondary leading-relaxed',
  bodySmall: 'text-sm text-dark-text-secondary',
  label: 'text-sm font-semibold uppercase tracking-wider',
  caption: 'text-xs text-dark-text-secondary/70',
} as const;

// ============================================================================
// SECTION STYLES
// ============================================================================
export const sectionStyles = {
  container: 'max-w-7xl mx-auto px-6',
  padding: 'py-24',
  paddingLarge: 'py-32',
  paddingSmall: 'py-12',
  spacing: 'space-y-8',
  spacingLarge: 'space-y-12',
} as const;

// ============================================================================
// LINK STYLES
// ============================================================================
export const linkStyles = {
  primary: 'text-primary hover:text-primary-dark transition-colors',
  secondary: 'text-dark-text-secondary hover:text-primary hover:translate-x-1 transition-all',
  neon: 'text-primary font-bold text-sm hover:text-accent transition-colors',
} as const;

// ============================================================================
// GRID STYLES
// ============================================================================
export const gridStyles = {
  auto2: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  auto3: 'grid grid-cols-1 md:grid-cols-3 gap-8',
  auto4: 'grid grid-cols-1 md:grid-cols-4 gap-8',
  auto5: 'grid grid-cols-1 md:grid-cols-5 gap-12',
  gallery: 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6',
} as const;

// ============================================================================
// FLEX UTILITIES
// ============================================================================
export const flexStyles = {
  center: 'flex items-center justify-center',
  between: 'flex items-center justify-between',
  colCenter: 'flex flex-col items-center justify-center',
  colStart: 'flex flex-col items-start justify-start',
  gap4: 'flex gap-4 items-center',
  gap6: 'flex gap-6 items-center',
  gap8: 'flex gap-8 items-center',
} as const;

// ============================================================================
// GRADIENT TEXT STYLES
// ============================================================================
export const gradientStyles = {
  primary: 'bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent',
  primaryAccent: 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent',
  secondaryPrimary: 'bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent',
} as const;

// ============================================================================
// BORDER STYLES
// ============================================================================
export const borderStyles = {
  primary: 'border border-primary/20',
  primaryHover: 'border border-primary/20 hover:border-primary/50 transition-colors',
  accent: 'border border-accent/20',
  subtle: 'border border-dark-text/10',
  glow: 'border border-primary/20 shadow-lg shadow-primary/5',
} as const;

// ============================================================================
// HOVER EFFECTS
// ============================================================================
export const hoverStyles = {
  glow: 'hover:shadow-lg hover:shadow-primary/50 transition-all',
  scale: 'hover:scale-105 transition-transform',
  lift: 'hover:-translate-y-2 transition-transform',
  brightGlow: 'hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105',
} as const;

// ============================================================================
// BACKDROP STYLES
// ============================================================================
export const backdropStyles = {
  blur: 'backdrop-blur-lg',
  blurMd: 'backdrop-blur-md',
  blurSm: 'backdrop-blur-sm',
  frosted: 'backdrop-blur-xl bg-white/5',
} as const;

// ============================================================================
// UTILITY FUNCTION: Merge multiple style strings
// ============================================================================
export function mergeStyles(...styles: (string | undefined)[]): string {
  return styles.filter(Boolean).join(' ');
}

// ============================================================================
// UTILITY FUNCTION: Create responsive classes
// ============================================================================
export function responsiveClass(mobile: string, tablet: string, desktop: string): string {
  return `${mobile} md:${tablet} lg:${desktop}`;
}

// ============================================================================
// UTILITY FUNCTION: Create gradient with colors
// ============================================================================
export function createGradient(
  from: string,
  via?: string,
  to?: string,
  direction: 'to-r' | 'to-b' | 'to-tr' | 'to-br' = 'to-r'
): string {
  if (via && to) {
    return `bg-gradient-${direction} from-[${from}] via-[${via}] to-[${to}]`;
  }
  if (to) {
    return `bg-gradient-${direction} from-[${from}] to-[${to}]`;
  }
  return `bg-gradient-${direction} from-[${from}]`;
}

/**
 * Component Style Collections
 * Pre-configured style combinations for common component patterns
 */
export const componentStyles = {
  // Hero Section
  hero: {
    container: 'relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden',
    content: 'relative z-10 max-w-4xl text-center',
    background: 'absolute inset-0 w-full h-full z-0',
  },

  // Feature Card
  featureCard: {
    container: 'bg-dark-surface rounded-lg p-8 border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20',
    icon: 'w-12 h-12 rounded-lg mb-6',
    title: 'text-2xl font-bold mb-4',
    description: 'text-dark-text-secondary mb-4',
  },

  // CTA Section
  ctaSection: {
    container: 'bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 rounded-lg p-12 border border-primary/20 text-center',
    title: 'text-4xl font-900 mb-6',
    description: 'text-xl text-dark-text-secondary mb-8 max-w-2xl mx-auto',
  },

  // Navigation Link
  navLink: {
    base: 'text-dark-text-secondary hover:text-primary transition-colors',
    active: 'text-primary font-bold',
    mobile: 'block px-4 py-2 rounded-lg hover:bg-dark-surface transition-colors',
  },

  // Badge/Tag
  badge: {
    primary: 'inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold',
    secondary: 'inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold',
    accent: 'inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold',
  },

  // Input/Form
  input: {
    base: 'w-full px-4 py-3 bg-dark-surface border border-dark-text/20 rounded-lg text-white placeholder-dark-text-secondary focus:outline-none focus:border-primary transition-colors',
    focus: 'focus:border-primary focus:shadow-lg focus:shadow-primary/20',
  },

  // List Item
  listItem: {
    base: 'flex items-start gap-4 p-4',
    icon: 'w-2 h-2 rounded-full mt-2 flex-shrink-0',
    content: 'text-dark-text-secondary',
  },
} as const;
