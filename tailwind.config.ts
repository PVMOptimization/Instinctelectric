import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050608',
          900: '#0a0d12',
          850: '#0d1117',
          800: '#11151c',
          700: '#1a1f28',
          600: '#262d3a',
          500: '#3a4250',
        },
        volt: {
          DEFAULT: '#0044ff',
          soft: '#0044ff20',
        },
        live: {
          DEFAULT: '#19fa05',
          soft: '#19fa0520',
        },
        bone: '#e8e6df',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-serif', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        crush: '-0.06em',
      },
    },
  },
  plugins: [],
} satisfies Config
