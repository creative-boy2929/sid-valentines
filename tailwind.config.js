/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
  colors: {
    crimson: "#9b111e",
    roseGold: "#b76e79",
    midnight: "#050505",
  },
  fontFamily: {
    display: ["Playfair Display", "serif"],
    body: ["Poppins", "sans-serif"],
  },
},

  },
  plugins: [],
};
