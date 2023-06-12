/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#fafafa',
        secondary: '#1D267D',
        tertiary: '#5C469C',
        quaternary: '#D4ADFC',
        dark1: '#080808',
        dark2: '#101010',
        dark3: '#181818',
        dark4: '#282828',
        dark5: '#323232',
      },
      fontFamily: {
        logo: 'Courgette',
        logo2: 'Rock Salt'
      }
    },
  },
  plugins: [],
}