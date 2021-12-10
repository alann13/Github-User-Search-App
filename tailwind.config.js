module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '0 16px 30px -10px rgb(70, 96, 187, 0.2)',
    },
    colors: {
      black: '#2B3442',
      altBlack: '#141D2F',
      blue: '#0079FF',
      altBlue: '#4B6A9B',
      darkBlue: '#1E2A47',
      lightBlue: '#60ABFF',
      gray: '#697C9A',
      lightGray: '#F6F8FF',
      red: '#F74646',
      white: '#FEFEFE',
    },
    extend: {
      fontSize: {
        '2.5xl': ['1.625rem', '2.375rem'],
        '1.5xl': ['1.375', '2rem'],
        tiny: ['0.8125rem', '1.25rem'], // h4
      },
      screens: {
        md2: '960px',
      },
      textColor: {
        title: '#222731',
      },
    },
    fontFamily: {
      mono: ["'Space Mono'", 'monospace'],
    },
    maxWidth: {
      730: '730px',
      575: '575px',
      325: '325px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
