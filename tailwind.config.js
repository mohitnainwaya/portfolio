/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        display: [
          'Satoshi',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px rgba(45, 212, 191, 0.14)',
        coral: '0 18px 70px rgba(251, 113, 133, 0.16)',
      },
      animation: {
        shimmer: 'shimmer 8s linear infinite',
        float: 'float 8s ease-in-out infinite',
        scan: 'scan 4.5s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(-18%)', opacity: 0.2 },
          '50%': { transform: 'translateY(92%)', opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
};
