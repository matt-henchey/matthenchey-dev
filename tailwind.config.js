import {colors} from './src/lib/styles/colors'

/** @type {import('tailwindcss').Config}  */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: colors,  
    },
  },
  plugins: [],
}