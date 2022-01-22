const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      amber: colors.amber,
      cyan: colors.cyan,
      teal: colors.teal,
      green: colors.green,
      sky: colors.sky,
      rose: colors.rose,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
