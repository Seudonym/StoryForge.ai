/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        mountain: "assets/background.jpg",
      },
      animation: {
        typewriter: "typewriter 3.5s infinite",
        blink: "blink 1.0s infinite",
      },
      keyframes: {
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%,100%": { borderColor: "black" },
          "50%": { borderColor: "white" },
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
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
