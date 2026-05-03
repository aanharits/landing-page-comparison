/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D6A4F',
        'primary-dark': '#1B4332',
        secondary: '#74C69D',
        'secondary-light': '#B7E4C7',
        accent: '#F4A261',
        'accent-dark': '#E76F51',
        background: '#FAFAFA',
        text: '#1A1A2E',
        'text-light': '#4A4A5A',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        accent: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [],
};
