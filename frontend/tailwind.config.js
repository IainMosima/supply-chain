/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#4169E1',
        gray: '#4E4E4E'
      },
      listStyleType: {
        roman: 'upper-roman',
      }
    },

  },
  plugins: [],
}
