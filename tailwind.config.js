/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'houseColor': '#ac9cf4',
        'jointColor': '#fccc94',
        'senateColor': '#b4e4bc'
      }
    },
  },
  plugins: [],
}
