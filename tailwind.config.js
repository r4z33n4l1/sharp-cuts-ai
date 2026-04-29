/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Plan tokens (build-landing-page-plan.md §6)
        ink: '#0B0B0C',     // page background
        char: '#141416',    // card background
        bone: '#F5F1E8',    // primary text on dark
        brass: '#C9A96E',   // accent (barber-pole brass)
        blade: '#7C8A99',   // muted text
        line: '#22232A',    // hairline borders
        crimson: '#D23A3A', // barber-pole stripe red
      },
      maxWidth: {
        content: '72rem',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(201,169,110,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,169,110,0.06) 1px, transparent 1px)',
        'radial-spot':
          'radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.18), transparent 60%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
