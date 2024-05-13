/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": {
          "primary": "#F5F5F5",
          "secondary": "#454545",
          "ascent": "#2E7188",
          "bg": "#F5F5DC",
        },
        "dark": {
          "primary": "#010824",
          "secondary": "#f5f5f5",
          "ascent": "#8C919D",
          "bg": "#282A37"
        }
      }
    },
  },
  plugins: [],
}
