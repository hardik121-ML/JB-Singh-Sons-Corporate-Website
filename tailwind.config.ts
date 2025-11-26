import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF0000',
          'orange-alt': '#FF0000',
          navy: '#00324B',
        },
        neutral: {
          dark: '#1a1a1a',
          light: '#f8f8f8',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.7)',
          'white-strong': 'rgba(255, 255, 255, 0.85)',
          dark: 'rgba(0, 0, 0, 0.3)',
          border: 'rgba(255, 255, 255, 0.3)',
          'border-dark': 'rgba(0, 0, 0, 0.1)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
      },
      borderRadius: {
        '1vmax': 'max(0.625rem, 1vmax)',
        '2vmax': 'max(1.25rem, 2vmax)',
        '3vmax': 'max(1.875rem, 3vmax)',
        '4xl': '2rem',
      },
      spacing: {
        '6vw': '6vw',
        '4vmax': 'max(2rem, 4vmax)',
        '2.5vmax': 'max(1.25rem, 2.5vmax)',
      },
      fontSize: {
        'responsive-sm': 'max(0.8rem, 1vmax)',
        'responsive-base': 'max(1rem, 1.2vmax)',
        'responsive-lg': 'max(1.25rem, 1.5vmax)',
        'responsive-xl': 'max(1.5rem, 2vmax)',
        'responsive-2xl': 'max(2rem, 2.5vmax)',
        'responsive-3xl': 'max(2.5rem, 3vmax)',
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '64px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.12)',
        'glass-inset': 'inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
        'glass-hover': '0 12px 40px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'blur-in': 'blurIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blurIn: {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
