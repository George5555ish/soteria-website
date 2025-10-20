/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5f0',
          100: '#f4e6d7',
          200: '#e8cdaf',
          300: '#dbb382',
          400: '#ce9a55',
          500: '#c58a3c',
          600: '#b77a31',
          700: '#98612b',
          800: '#7a4e29',
          900: '#644124',
        },
        secondary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#badcfd',
          300: '#7db9fc',
          400: '#3892f8',
          500: '#0f74e9',
          600: '#0357c7',
          700: '#0445a1',
          800: '#083b85',
          900: '#0d336e',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

