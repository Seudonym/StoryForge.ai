/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      backgroundImage: {
        mountain: "assets/background.jpg",
      },
      animation: {
        typewriter: 'typewriter 3.5s  infinite',
      },
      keyframes:{
        typewriter:{
          '0%':{width:'0%'},
          '100%':{width:'100%'},
        },
        blink:{
          '0%,100%':{borderColor:'black'},
          '50%':{borderColor:'white'},
        },
      }
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
