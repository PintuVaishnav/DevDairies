/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: colors.slate[900],
          primary: colors.slate[50],
          secondary: colors.slate[300],
          tertiary: colors.slate[400],
          card: colors.slate[800],
          title: colors.slate[50],
          description: colors.slate[400],
          info: colors.slate[500],
        },
        light: {
          DEFAULT: colors.slate[50],
          primary: colors.slate[900],
          secondary: colors.slate[600],
          tertiary: colors.slate[500],
          title: colors.slate[900],
          description: colors.slate[700],
          info: colors.slate[500],
        },
        'light-theme-background': '#fae9b1',
        'light-theme-foreground': '#f1c237',
        'dark-theme-background': '#092e40',
        'dark-theme-foreground': '#25a5e3',
      },
       maxWidth: {
    '6xl': '86rem',
  },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        moveVertical: 'moveVertical 5s ease-in-out infinite',
        moveVerticalGroup: 'moveVerticalGroup 12s linear infinite',
        moveVerticalGroupReverse: 'moveVerticalGroupReverse 12s linear infinite',
      },
      keyframes: {
        moveVertical: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(50px)' },
          '100%': { transform: 'translateY(0)' },
        },
        moveVerticalGroup: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        moveVerticalGroupReverse: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
