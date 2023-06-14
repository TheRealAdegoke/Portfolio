/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "smaller": {"min": "300px", "max": "350px"},
        "small": {"max": "1220px"},
        "medium": {"min": "500px", "max": "1220px"},
        "tablet": {"min": "767px", "max": "1220px"},
        "large": {"min": "1221px"},
      },
      fontFamily: {
        "karla": ['Karla', "sans-serif"],
        "Bebas": ['Bebas Neue', "sans-serif"]
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}

