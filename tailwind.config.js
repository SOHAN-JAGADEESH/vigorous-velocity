/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          dark: '#000000',
          light: '#000000',
        },
        accent: {
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
          light: '#FFD700',
        },
        card: {
          DEFAULT: 'rgba(0, 0, 0, 0.8)',
          dark: 'rgba(0, 0, 0, 0.9)',
          light: 'rgba(0, 0, 0, 0.7)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 