/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'Bblue': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        'dimdark': {
          100: '#f0f0f0',
          200: '#d0d0d0',
          300: '#b0b0b0',
          400: '#909090',
          500: '#808080',
          600: '#707070',
          700: '#606060',
          800: '#505050',
          900: '#404040',
        },
      },
    },
  },
  plugins: [],
}
