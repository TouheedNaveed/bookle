/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes: {
        spinCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moveLeftRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' }, // Adjust this value as needed
        },
        moveTopBottom: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' }, // Adjust this value as needed
        },
        spinStar: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideIn:{
          '0%':{transform:'translateX(100%)'},
          '100%':{transform:'translateX(0)'},
        },
        slideOut:{
          '0%':{transform:'translateX(0)'},
          '100%':{transform:'translateX(100%)'},
        },
      },
      animation: {
        spinCircle: 'spinCircle 10s linear infinite',
        spinStar: 'spinStar 10s linear infinite',
        moveLeftRight: 'moveLeftRight 3s linear infinite',
        moveTopBottom: 'moveTopBottom 3s linear infinite',
        slideIn: 'slideIn 0.3s forwards',
        slideOut: 'slideOut 0.3s forwards',
      },
      screens:{
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',

      },
    },
  },
  plugins: [],
}

