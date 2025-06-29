/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        velvet: {
          red: "#7C0A02",      // rich deep velvet red
          dark: "#4B0000",     // darker accent
        },
        brand: {
          white: "#FFFFFF",
          gray: "#F5F5F5",
        }
      },
      fontFamily: {
        velvet: ["Poppins", "sans-serif"], // or Montserrat if you prefer
      },
    },
  },
  plugins: [],
}
