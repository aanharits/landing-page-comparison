/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        offwhite: '#FAF9F6',
        onyx: '#1A1A1A',
        sage: '#829281',
        sagedark: '#5C6B5B',
        clay: '#B06C4D',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [],
};
