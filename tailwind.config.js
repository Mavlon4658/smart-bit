/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-violet': 'linear-gradient(111.19deg, rgb(34, 27, 78) 5.031%, rgb(50, 61, 95) 97.147%)'
      }),
      fontFamily: {
        'audiowide': ['Audiowide', 'sans-serif'],
      },
      keyframes: {
        'voise': {
          '0': { opacity: '.35', height: '8px' },
          '100%': { opacity: '1', height: '25px' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

