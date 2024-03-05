/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#19191B",
        "dark-grey": "#505056",
        grey: "#7F7F85",
        white: "#FFFFFF",
        "light-green": "#EDF1EE",
        green: "#466F55",
        "accent-green": "#205232",
      },
    },
    plugins: [],
  },
};
