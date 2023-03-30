/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      OpenSans: ["Open Sans", 'sans-serif'],
      Montserrat: ["Montserrat", 'sans-serif'],
      Oswald: ["Oswald", 'sans-serif']
    }
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}