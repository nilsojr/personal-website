/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xp-blue': '#0078d4',
        'xp-gray': '#c0c0c0',
        'xp-dark-gray': '#808080',
        'xp-light-gray': '#e0e0e0',
        'xp-border': '#a0a0a0',
        'xp-shadow': '#404040',
      },
      fontFamily: {
        'xp': ['Tahoma', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'xp-inset': 'inset 1px 1px 0px #ffffff, inset -1px -1px 0px #808080',
        'xp-outset': '1px 1px 0px #ffffff, -1px -1px 0px #808080',
        'xp-pressed': 'inset 1px 1px 0px #808080, inset -1px -1px 0px #ffffff',
      }
    },
  },
  plugins: [],
}


