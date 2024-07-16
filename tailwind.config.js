/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bcgClr': '#002a40',
        'bgClr2':'rgba(0, 0, 0, .12)',
        'bgClr3':'#f3f7f9'
      },
      width: {
        '104': '26rem',
        '180': '45rem'
      },
      
      
    },
  },
  plugins: [],
}

