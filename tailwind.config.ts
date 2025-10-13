import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tomoshibi-beige': '#FAF7F2',
        'tomoshibi-beige-dark': '#F9F5EE',
        'tomoshibi-brown': '#3A2C1A',
        'tomoshibi-gold': '#D6B87A',
        'tomoshibi-grey': '#EAE6DE',
      },
      fontFamily: {
        'serif': ['Noto Serif JP', 'Playfair Display', 'serif'],
        'sans': ['Noto Sans JP', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.05em',
      },
      borderRadius: {
        'soft': '8px',
        'softer': '12px',
      },
      boxShadow: {
        'glow': '0 0 24px rgba(214, 184, 122, 0.15)',
        'glow-lg': '0 0 48px rgba(214, 184, 122, 0.2)',
        'soft': '0 4px 24px rgba(58, 44, 26, 0.08)',
        'softer': '0 8px 32px rgba(58, 44, 26, 0.06)',
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite',
        'flame': 'flame 2s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        flame: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-3px) scale(1.02)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config

