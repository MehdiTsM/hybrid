/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: '#f100fb',
        customColor2: '#07000f',

      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

