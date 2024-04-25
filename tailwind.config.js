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
      black: '#020202',
      gray: {
        100: '#eeeeee',
        200: '#cbcbcb',
        300: '#9a9a9a',
        400: '#757575',
        500: '#535353',
        600: '#3e3e3e',
        700: '#262626',
        800: '#0e0e0e',
        900: '#090909',
      },
      red: colors.red,
      blue: colors.blue,
      indigo: colors.indigo,
      yellow: colors.yellow,
      amber: colors.amber,
      cyan: colors.cyan,
      teal: colors.teal,
      green: colors.green,
      sky: colors.sky,
      rose: colors.rose,
      purple: colors.violet,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
