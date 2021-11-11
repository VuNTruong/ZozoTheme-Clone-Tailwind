module.exports = {
  purge: ["index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
