module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'corona': '#FB4C47',
        'corona-green': '#035755'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
