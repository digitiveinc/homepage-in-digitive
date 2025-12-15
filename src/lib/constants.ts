/**
 * Design System Constants
 * Centralized configuration for colors, spacing, typography, and animations
 */

// ============================================================================
// COLOR PALETTE
// ============================================================================
export const COLORS = {
  // Primary Colors
  primary: '#00ff88',
  primaryDark: '#00cc6e',
  primaryLight: '#66ffaa',

  // Secondary Colors
  secondary: '#ff0080',
  secondaryDark: '#cc0066',
  secondaryLight: '#ff3399',

  // Accent Colors
  accent: '#00d4ff',
  accentDark: '#00a8cc',
  accentLight: '#66e6ff',

  // Neutral Colors
  background: '#0a0a0a',
  surface: '#1a1a1a',
  surfaceDark: '#0f0f0f',
  surfaceLight: '#262626',

  // Text Colors
  text: '#ffffff',
  textSecondary: '#a0a0a0',
  textTertiary: '#707070',
  textInverse: '#0a0a0a',

  // Border Colors
  border: '#333333',
  borderLight: '#1a1a1a',
  borderAccent: '#00ff88',

  // Utility Colors
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

// ============================================================================
// SPACING SCALE
// ============================================================================
export const SPACING = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '2.5rem', // 40px
  '3xl': '3rem',  // 48px
  '4xl': '4rem',  // 64px
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================
export const TYPOGRAPHY = {
  fontFamily: {
    default: "'Inter', 'Noto Sans JP', sans-serif",
    heading: "'Inter', 'Noto Sans JP', sans-serif",
    mono: "'Fira Code', monospace",
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    '4xl': '2.5rem',  // 40px
    '5xl': '3rem',    // 48px
    '6xl': '3.5rem',  // 56px
    '7xl': '4.5rem',  // 72px
  },
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.6,
    relaxed: 1.8,
  },
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================
export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
  ultraWide: '1536px',
} as const;

// ============================================================================
// SHADOWS
// ============================================================================
export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  glow: '0 0 20px rgba(0, 255, 136, 0.3)',
  glowPrimary: '0 0 20px rgba(0, 255, 136, 0.3)',
  glowSecondary: '0 0 20px rgba(255, 0, 128, 0.3)',
  glowAccent: '0 0 20px rgba(0, 212, 255, 0.3)',
} as const;

// ============================================================================
// TRANSITIONS
// ============================================================================
export const TRANSITIONS = {
  fast: '150ms ease-in-out',
  base: '300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  slow: '500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
  slower: '800ms cubic-bezier(0.4, 0.0, 0.2, 1)',
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.25rem',  // 4px
  md: '0.5rem',   // 8px
  lg: '0.75rem',  // 12px
  xl: '1rem',     // 16px
  '2xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// ============================================================================
// CONTAINER SIZES
// ============================================================================
export const CONTAINERS = {
  xs: '20rem',      // 320px
  sm: '24rem',      // 384px
  md: '28rem',      // 448px
  lg: '32rem',      // 512px
  xl: '36rem',      // 576px
  '2xl': '42rem',   // 672px
  '3xl': '48rem',   // 768px
  '4xl': '56rem',   // 896px
  '5xl': '64rem',   // 1024px
  '6xl': '72rem',   // 1152px
  '7xl': '80rem',   // 1280px
  full: '100%',
  maxContent: '90rem', // 1440px
} as const;

// ============================================================================
// Z-INDEX SCALE
// ============================================================================
export const Z_INDEX = {
  auto: 'auto',
  zero: 0,
  base: 1,
  navigation: 40,
  sticky: 30,
  overlay: 50,
  dropdown: 100,
  sticky_tooltip: 110,
  fixed: 1000,
  modal_backdrop: 1010,
  modal: 1020,
  popover: 1030,
  tooltip: 1070,
} as const;

// ============================================================================
// GRADIENT PRESETS
// ============================================================================
export const GRADIENTS = {
  brandPrimary: 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)',
  brandSecondary: 'linear-gradient(135deg, #ff0080 0%, #00ff88 100%)',
  brandTertiary: 'linear-gradient(135deg, #00d4ff 0%, #ff0080 100%)',
  neon: 'linear-gradient(90deg, #00ff88 0%, #ff0080 50%, #00d4ff 100%)',
  dark: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
  darkWithPrimary: 'linear-gradient(to right, #00ff88 0%, #0a0a0a 100%)',
} as const;

// ============================================================================
// ANIMATION EASING
// ============================================================================
export const EASING = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
} as const;
