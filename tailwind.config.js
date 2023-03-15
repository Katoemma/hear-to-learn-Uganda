/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm' : '481px', //tablets
      'md' : '769px', //small screens and laptops
      'lg' : '1025px', //desktop and large screens
      'xl' : '1201px', //large screens
    },
    colors: {
      'brownish' : '#cc6600',
      'textColor': '#00004d',
      'white': '#ffffff',
      'black': '#000000',
      'grayish': '#e6e6e6',
    },
    extend: {
      backgroundImage: {
        'heroImg': "url('/img/riverblind.jpg')",
        "smallHero": "url('/img/blind-2.jpg')"
      }
    },
  },
  plugins: [],
}
