/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          light: 'rgb(224, 204, 250)',
          DEFAULT: 'rgb(136, 58, 234)',
          dark: 'rgb(49, 10, 101)',
        },
      },
      animation: {
        'rotate': 'rotate 4s linear infinite',
        'rotate-reverse': 'rotate 4s linear infinite reverse',
        'fill': 'fill 2s ease-in-out infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fill: {
          '0%, 100%': { width: '0%' },
          '50%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}