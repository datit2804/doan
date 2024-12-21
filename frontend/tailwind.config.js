module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
  ],
  theme: {
    extend: {
      width: {
        '1100': '1100px'
      },
      backgroundColor: {
        primary: '#F5F5F5',
        secondary1: '#87c476',
        secondary2: '#c71808',
        secondary3: '#d2d4d2',
        secondary4: '#0a0a0a',
        'overlay-30': 'rgba(0,0,0,0.3)',
        'overlay-70': 'rgba(0,0,0,0.7)',
      },
      maxWidth: {
        '600': '600px',
        '1100': '1100px'
      },
      minWidth: {
        '300': '300px',
        '200': '200px'
      },
      cursor: {
        pointer: 'pointer'
      },
      flex: {
        '3': '3 3 0%'
      },
      animation: {
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
      },
      keyframes: {
        ' slide-right ': {
          '0%': {
            '-webkit-transform': 'translateX(0)',
            transform: 'translateX(0)'
          },
          '100%': {
            '-webkit-transform': 'translateX(100px)',
            transform: 'translateX(100px)'
          }
        }

      }
    },
  },
  plugins: [],
}