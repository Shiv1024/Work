/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bcgClr': '#002a40',
        'bgToClr': '#005f73',
        'bgClr2':'rgba(0, 0, 0, .12)',
        'bgClr3':'#f3f7f9',
        'bgClr4':'rgba(0,0,0,.87)',
        'bgClr5':'rgb(238, 238, 238);',
        'brdr-green': '#33c294',
        'bg-mainClr':'#eaedef'
      },
      width: {
        '104': '26rem',
        '180': '45rem'
      },

      height: {
        '120': '30rem'
      },
      
      
    },
  },
  plugins: [],
}

