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
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '1vmax': 'max(0.625rem, 1vmax)',
        '2vmax': 'max(1.25rem, 2vmax)',
        '3vmax': 'max(1.875rem, 3vmax)',
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
    },
  },
  plugins: [],
};
export default config;
