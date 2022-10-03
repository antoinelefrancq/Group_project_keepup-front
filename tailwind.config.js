/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home_mobile': 'url(\'/src/assets/home_mobile.svg\')',
        'home_desk': 'url(\'/src/assets/home_desk.svg\')',        
        'vector': 'url(\'/src/assets/Vector.svg\')',
        'arrow': 'url(\'/src/assets/Arrow.svg\')',
        'rectangle': 'url(\'/src/assets/Rectangle.svg\')',
        'wave': 'url(\'/src/assets/Wave_home.svg\')',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '80%': '80%',
        '16': '4rem',
      },
      boxShadow: {
        'ButtonBox': '0 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
    screens: {
      vsm: '380px',
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
      'transparent': 'rgba(0,0,0,0)',
      'greyPlaceholder':'#A5A5A5'
    },
    fontFamily: {
      pangram: ['PANGRAM', 'sans-serif'],
    },
    plugins: [],
  },
};