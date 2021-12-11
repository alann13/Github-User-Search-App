module.exports = {
  content: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
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
      boxShadow: {
        DEFAULT: '0 16px 30px -10px rgb(70, 96, 187, 0.25)',
      },
      fontSize: {
        '2.5xl': ['1.625rem'],
        '1.5xl': ['1.375', '2rem'],
        tiny: ['0.8125rem', '1.25rem'], // h4,
        xxs: ['0.6875', 1], // 11px
      },
      screens: {
        md2: '960px',
      },
      spacing: {
        '480px': '30rem',
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
