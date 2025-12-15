import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ff88',
        'primary-dark': '#00cc6e',
        secondary: '#ff0080',
        'secondary-dark': '#cc0066',
        accent: '#00d4ff',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#1a1a1a',
        'dark-text': '#ffffff',
        'dark-text-secondary': '#a0a0a0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-noto-sans-jp)'],
        mono: ['Fira Code'],
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
