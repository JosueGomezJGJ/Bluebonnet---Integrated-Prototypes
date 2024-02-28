/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path according to your project's structure
  ],
  theme: {
    extend: {
      colors: {
        summer: "#EEEE99",
        fall: "#EB9930",
        winter: "#CAF0FF",
        spring: "#8FBB8D",
      },
    },
  },
  plugins: [],
};
