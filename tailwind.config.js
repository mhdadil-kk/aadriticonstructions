/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#f44336',
          600: '#e53935', // primary
          700: '#d32f2f',
          800: '#c62828', // primary-dark
        },
        gray: {
          800: '#212121', // secondary
          900: '#121212', // dark
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 1s ease',
        fadeInUp: 'fadeInUp 1s ease',
        fadeIn: 'fadeIn 1s ease',
        slideIn: 'slideIn 0.8s ease-out',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 1.5s infinite', // Added shimmer animation
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }, // Added shimmer keyframes
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(244, 67, 54, 0.3)',
      },
      backgroundImage: {
        'shimmer-bg': 'linear-gradient(90deg, #212121 25%, #374151 50%, #212121 75%)', // Using gray-800
      },
      backgroundSize: {
        'shimmer-size': '200% 100%',
      },
    },
  },
  plugins: [],
};