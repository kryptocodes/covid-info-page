module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'corona': '#FB4C47',
        'corona-green': '#035755',
        'corona-black': '#4B4F51',
      },
      fontFamily: {
        'gelion': ['Gelion-Regular'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
