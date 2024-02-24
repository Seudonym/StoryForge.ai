/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      backgroundImage: {
        mountain: "assets/background.jpg",
      },
    },
    colors: {
      "primary-dark": "#131314",
      "primary-medium": "#1e1f20",
      "primary-light": "#373741",
      black: "#000000",
      white: "#ffffff",
    },
  },
  plugins: [],
};
