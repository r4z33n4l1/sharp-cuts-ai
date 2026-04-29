/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#08070a',
          900: '#0d0c10',
          800: '#15131a',
          700: '#1f1c26',
          600: '#2a2632',
        },
        brass: {
          50: '#fbf3df',
          100: '#f5e3b0',
          200: '#e9c97a',
          300: '#d6ad4f',
          400: '#bf9136',
          500: '#9c7424',
          600: '#74551b',
        },
        crimson: {
          500: '#d23a3a',
          600: '#b22a2a',
        },
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(214,173,79,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(214,173,79,0.06) 1px, transparent 1px)',
        'radial-spot':
          'radial-gradient(ellipse at 50% 0%, rgba(214,173,79,0.18), transparent 60%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
