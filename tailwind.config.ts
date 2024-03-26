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
          100: '#004DC8',
          200: '#0044B2',
          300: '#003C9C',
          400: '#003385',
          500: '#003385',
          600: '#002B6F',
          700: '#002259',
          800: '#001A43',
          900: '#00112C'
        },
        primary: {
          100: '#6B15E4',
          200: '#6213D1',
          300: '#5912BE',
          400: '#5110AB',
          500: '#480E98',
          600: '#3F0C85',
          700: '#360B72',
          800: '#2D095F',
          900: '#24074C'
        },
        secondary: {
          100: '#DB005F',
          200: '#C80057',
          300: '#B6004F',
          400: '#A40047',
          500: '#92003F',
          600: '#800037',
          700: '#6D002F',
          800: '#5B0027',
          900: '#490020'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'),
    require('tailwind-scrollbar-hide')
  ]
}
export default config
