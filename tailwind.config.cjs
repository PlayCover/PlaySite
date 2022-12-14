/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xxs: '480px',
        xxl: '1400px',
      },
      colors: {
        'light': '#F3F4F6',
        'dark': '#181818',
        'pc-g': '#00BAAF',
        'pc-b': '#317AEC',
      },
      fontFamily: {
        lufga: ['Lufga', 'sans-serif'],
        itcavantgardestdmd: ['Itcavantgardestdmd', 'sans-serif'],
      },
      keyframes: {
        'hover': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0px)',
          },
          '15%': {
            opacity: '1',
            transform: 'translateY(-5px)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(-5px)',
          },
          '75%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(0)',
          },
        },
        'hover-opposite': {
          '0%': {
            opacity: '0',
            transform: 'translateY(0px)',
          },
          '15%': {
            opacity: '1',
          },
          '40%': {
            opacity: '1',
            transform: 'translateY(-2px)',
          },
          '70%': {
            opacity: '1',
            transform: 'translateY(-6px)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'hover-short': 'hover 10s infinite ease-in-out',
        'hover-medium': 'hover-opposite 10s infinite ease-in-out',
        'hover-long': 'hover 10s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
