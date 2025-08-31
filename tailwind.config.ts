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
        navy: {
          50: '#f0f3f7',
          100: '#d9e2ed',
          200: '#b3c5db',
          300: '#8ca8c9',
          400: '#668bb7',
          500: '#1e3a5f',
          600: '#1a3251',
          700: '#162943',
          800: '#122135',
          900: '#0e1927',
          950: '#0a111b',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d4a017',
          600: '#b08411',
          700: '#8b680e',
          800: '#664d0a',
          900: '#423107',
        },
        hawaiian: {
          ocean: '#006994',
          sunset: '#ff6b35',
          coral: '#ff8c94',
          palm: '#52b788',
          sand: '#f4e4c1',
          volcano: '#c1121f',
          lagoon: '#00a8cc',
          plumeria: '#fff3b2',
        },
        executive: {
          dark: '#0a111b',
          navy: '#1e3a5f',
          gold: '#d4a017',
          light: '#f8f9fa',
          gray: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config