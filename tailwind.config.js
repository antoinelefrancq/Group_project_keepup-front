/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': 'url(\'/src/assets/photo_accueil.svg\')',
        'vector': 'url(\'/src/assets/Vector.svg\')',
        'arrow': 'url(\'/src/assets/Arrow.svg\')',
        'rectangle': 'url(\'/src/assets/Rectangle.svg\')',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '80%': '80%',
        '16': '4rem',
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#0A6ABF',
      'red': '#F22259',
      'orange': '#F25C05',
      'white': '#F2EFEB',
      'black': 'rgb(0 0 0)',
      'blueCustom':'#0a6abf',
      'pinkCustom': '#f22259',
      'whiteCustom':'#f2efeb',
      'brownCustom': '#f25c05',
    },
    fontFamily: {
      pangram: ['PANGRAM', 'sans-serif'],
    },
    plugins: [],
  },
};