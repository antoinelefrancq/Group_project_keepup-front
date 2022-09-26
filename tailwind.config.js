/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {    
    extend: {
      colors:{
        'blueCustom':'#0a6abf',
        'pinkCustom': '#f22259',
        'whiteCustom':'#f2efeb',
        'brownCustom': '#f25c05',
      },
    },
  },
  plugins: [],
};