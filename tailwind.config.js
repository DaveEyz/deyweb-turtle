/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'turtle-green': '#88D66C',
        'turtle-dark': '#2C3E2E',
        'bg-cream': '#FDFBF7',
        'accent-yellow': '#FFD93D',
        'accent-orange': '#FF6B6B',
        'accent-blue': '#4D96FF'
      },
      fontFamily: {
        'display': ['Chewy', 'cursive'],
        'body': ['Patrick Hand', 'cursive'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
        'brutal-xl': '12px 12px 0px 0px #000000',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'shake': 'shake 2s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shake: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      }
    },
  },
  plugins: [],
}
