/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'mb2': '500px',

        'md': '850px',
        // => @media (min-width: 768px) { ... }

        'sm': '1024px',
        // => @media (min-width: 1024px) { ... }
      }

    },
  },
  plugins: [],
}

