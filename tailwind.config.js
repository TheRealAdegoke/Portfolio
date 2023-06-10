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
        // "medium": {"min": "768px", "max": "1023px"},
        "large": {"min": "1221px"},
      },
      fontFamily: {
        "karla": ['Karla', "sans-serif"],
        "Bebas": ['Bebas Neue', "sans-serif"]
      }
    },
  },
  plugins: [],
}

