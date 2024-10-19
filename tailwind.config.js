// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#f7e6d4',
          200: '#e4c8a2',
          300: '#d1a070',
          400: '#b7744d',
          500: '#9b5532',
          600: '#7f4226',
          700: '#663520',
          800: '#502a1a',
          900: '#3e1f14',
        },
      },
    },
  },
  plugins: [],
};
