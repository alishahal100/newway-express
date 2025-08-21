/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f0f8',
          100: '#e1e1f1',
          200: '#c3c3e3',
          300: '#a5a5d5',
          400: '#8787c7',
          500: '#090d61',
          600: '#070a4d',
          700: '#050739',
          800: '#030425',
          900: '#010211',
        },
        orange: {
          50: '#fff5f0',
          100: '#ffe6d9',
          200: '#ffccb3',
          300: '#ffb38d',
          400: '#ff9967',
          500: '#fe7429',
          600: '#e65a0f',
          700: '#cc4000',
          800: '#b32600',
          900: '#990c00',
        },
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
