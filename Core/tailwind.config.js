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
          DEFAULT: '#111317',
          light: '#1f2125',
          'extra-light': '#35373b',
        },
        secondary: {
          DEFAULT: '#f9ac54',
          dark: '#d79447',
        },
        text: {
          light: '#d1d5db',
        },
        white: '#ffffff',
      },
      maxWidth: {
        'custom': '1200px',
      },
    },
  },
  plugins: [],
}