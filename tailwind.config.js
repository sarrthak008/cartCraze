/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {screens: {
      'max-w-500': { 'max': '500px' }, 
      'sm': '501px',  
    },
},
  },
  plugins: [],
}