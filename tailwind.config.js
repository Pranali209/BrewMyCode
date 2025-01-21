/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes:
      {
        upDown:
        {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        circular: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -10px)' },
          '50%': { transform: 'translate(20px, 0)' },
          '75%': { transform: 'translate(10px, 10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        mobileCirclur:{
          '0%' : { transform: 'translate(0, 0) '},
         ' 25%' : { transform:' translate(100px, -400px) '},
         ' 50%' : { transform:' translate(50px, 0)'},
          '75% ' :{ transform: 'translate(100px, 100px)' },
          '100%' : { transform:' translate(0, 0)' },
        },
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 }, },
        fadeOut: { '0%': { opacity: 1 }, '100%': { opacity: 0 }, },
      }
      , animation: {
        upDown: 'upDown 1s ease-in-out infinite',
        circular: 'circular 4s linear infinite',
        fadeIn: 'fadeIn 2s ease-in-out',
        fadeOut: 'fadeOut 2s ease-in-out',
        mobileCirclur: 'mobileCirclur 18s linear infinite',
      },


    },
  },
  plugins: [],
}

