/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: '96px',
      },
      colors: {
        'blue-primary': '#3b71ad',
        'yellow-primary': '#ffbd59',
        'text-primary': '#53565a',
        'button-primary': '#66b1ff',
        'button-secondary': '#409eff',
        'banner-bg': '#003366',
      },
      fontFamily: {
        texto: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
