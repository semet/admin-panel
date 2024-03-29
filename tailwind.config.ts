import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      padding: ({ theme }) => {
        return {
          sm: theme('spacing.2'),
          md: theme('spacing.4'),
          lg: theme('spacing.6'),
          xl: theme('spacing.8')
        }
      },
      margin: ({ theme }) => {
        return {
          sm: theme('spacing.2'),
          md: theme('spacing.4'),
          lg: theme('spacing.6'),
          xl: theme('spacing.8')
        }
      },
      colors: {
        brand: {
          100: '#4FB4E6',
          200: '#32A7E2',
          300: '#1E97D4',
          400: '#1A82B6',
          500: '#166D99',
          600: '#12587C',
          700: '#0D435E',
          800: '#092E41',
          900: '#051923'
        },
        primary: {
          100: '#90DAFF',
          200: '#7DD4FF',
          300: '#6ACDFF',
          400: '#58C7FF',
          500: '#45C1FF',
          600: '#33BBFF',
          700: '#20B5FF',
          800: '#0DAEFF',
          900: '#00A6FB'
        },
        secondary: {
          100: '#FCA2CA',
          200: '#FB93C2',
          300: '#FB83B9',
          400: '#FA74B0',
          500: '#F964A7',
          600: '#F9559F',
          700: '#F84596',
          800: '#F8368D',
          900: '#F72585'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')
  ]
}
export default config
