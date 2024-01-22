/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      //membuat custom spacing
      spacing: {
        13: '5rem',
      }
    },
  },
  plugins: [],
}

