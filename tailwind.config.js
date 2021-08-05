module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors:{
        'primary':'#f3c614',
        'secundary':'#353535'
      },
      height: {
        '80': '20rem',
        '100': '26rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
