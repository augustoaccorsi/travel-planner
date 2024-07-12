/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter'
      },
      backgroundImage: {
        patter: 'url(/public/bg.png)'
      }
    },
  },
  plugins: [],
}
