/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "focus-purple": "#8B5CF6",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus"],
    },
  },
  darkMode: "selector",
  plugins: [],
};
