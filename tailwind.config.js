/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'Prmary': '#000000',
      },
    },
  },
  plugins: [],
}