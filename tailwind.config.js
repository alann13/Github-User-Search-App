module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      black: '#2B3442',
      altBlack: '#141D2F',
      blue: '#0079FF',
      altBlue: '#4B6A9B',
      darkBlue: '#1E2A47',
      gray: '#697C9A',
      lightGray: '#F6F8FF',
      red: '#F74646',
      white: '#FEFEFE',
    },
    extend: {},
    fontFamily: {
      mono: ["'Space Mono'", 'monospace'],
    },
    fontSize: {
      '2.5xl': ['1.625rem', '2.375rem'],
      '1.5xl': ['1.375', '2rem'],
      tiny: ['0.8125rem', '1.25rem'], // h4
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
