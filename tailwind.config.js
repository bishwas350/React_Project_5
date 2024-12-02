/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          menuColor:"#767676",
          menuColor2:"#262626",
          backgroundColor:"#F5F5F3",
          footerColor:"#979797",
          footerColor2:"#6D6D6D",
      },
      backgroundImage:{
        bannerbg:"url('./src/assets/image/Banner.png')"
      },
    },
  },
  plugins: [],
}

