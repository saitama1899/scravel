/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        'blue-scravel': '#14213d',
        'yellow-scravel': '#fca311',
        'gray-scravel': '#e5e5e5',
      },
      fontFamily: {
        'caviarDreams': ['CaviarDreams', 'sans']
      }
    }
  },
  plugins: [],
}

