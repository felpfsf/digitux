/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        digitux: {
          primary: '#3B71FE',
          text: '#0E0E2C',
          grey: '#A0A4AB',
          dark: '#262A31'
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
