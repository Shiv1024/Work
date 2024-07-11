/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bcgClr: '#002a40'

      },
      width: {
        '104': '26rem',
        '180': '45rem'
      },
    },
  },
  plugins: [],
}

