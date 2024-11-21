/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      neutral: '#404040',
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
      'sans': ['SoraRegular', ...defaultTheme.fontFamily.sans],
      'thin': ['SoraThin', ...defaultTheme.fontFamily.sans],
      'extra-light': ['SoraExtraLight', ...defaultTheme.fontFamily.sans],
      'light': ['SoraLight', ...defaultTheme.fontFamily.sans],
      'medium': ['SoraMedium', ...defaultTheme.fontFamily.sans],
      'semi-bold': ['SoraSemiBold', ...defaultTheme.fontFamily.sans],
      'bold': ['SoraBold', ...defaultTheme.fontFamily.sans],
      'extra-bold': ['SoraExtraBold', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      xs: '12px',
      s: '16px',
      m: '18px',
      ml: '20px',
      l: '24px',
      xl: '36px',
      xxl: '48px'
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
      black: '#000000',
      white: '#ffffff'
    },
    variants: {
      stroke: ['hover', 'focus', 'active']
    }
  },
  plugins: []
};
