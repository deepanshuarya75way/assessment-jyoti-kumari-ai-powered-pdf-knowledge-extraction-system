/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF8F3',
        'paper-alt': '#F1EDE4',
        ink: '#16181D',
        'ink-soft': '#5C6069',
        annotation: '#2B4C8C',
        'annotation-hover': '#1E3A6E',
        highlight: '#F2C94C',
        rule: '#DDD6C7',
        danger: '#A8352C',
      },
      fontFamily: {
        serif: ['Newsreader', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '6px',
      },
      keyframes: {
        'underline-load': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'underline-load': 'underline-load 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
