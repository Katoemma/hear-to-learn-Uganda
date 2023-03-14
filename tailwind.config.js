/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm' : '768px',
      'md' : '1024px',
      'lg' : '1224px',
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
