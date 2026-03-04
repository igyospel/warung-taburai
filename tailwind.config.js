/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        darkBg: '#882c17',
        darkerBg: '#662111',
        lightGray: '#EEEFF2',
        cartDark: '#272835',
      },
    },
  },
  plugins: [],
};
