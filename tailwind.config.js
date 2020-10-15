const defaultTheme = require('tailwindcss/defaultTheme');
const boxShadow = require('./src/styles/boxShadow');
const colors = require('./src/styles/colors');
const opacity = require('./src/styles/opacity');

module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
    options: {
      whitelist: ['w-32', 'w-56', 'w-64', 'h-32', 'h-56', 'h-64']
    }
  },
  theme: {
    extend: {
      boxShadow,
      colors,
      opacity,
      screens: {
        xl: '1280px',
        xxl: '1920px'
      },
      borderRadius: {
        sm: '0.1875rem',
        xl: '0.75rem'
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '14': '3.5rem',
        '128': '32rem',
        '160': '40rem'
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      inset: {
        '1/2': '50%'
      },
      zIndex: {
        '-1': '-1',
        '100': '100',
        '110': '110'
      }
    }
  },
  variants: [
    'responsive',
    'group-hover',
    'group-focus',
    'focus-within',
    'first',
    'last',
    'odd',
    'even',
    'hover',
    'focus',
    'active',
    'visited',
    'disabled'
  ],
  plugins: []
};
