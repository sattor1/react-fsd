/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#000000',
        neutral: '#404040',
        white: '#FFFFFF'
      },
      zinc: {
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        500: '#71717a',
        800: '#27272a'
      },
      error: '#ef4444',
      transparent: 'transparent'
    },
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      medium: ['RubikMedium', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      xs: '12px',
      s: '16px',
      m: '18px',
      l: '24px',
      xl: '36px'
    },
    extend: {
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px'
      }
    },
    stroke: {
      primary: '#000000',
      white: '#ffffff'
    },
    variants: {
      stroke: ['hover', 'focus']
    }
  },
  plugins: []
};
