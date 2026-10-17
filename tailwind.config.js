/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        'rating-bad': '#ef4444',
        'rating-medium': '#f59e0b',
        'rating-good': '#84cc16',
        'rating-excellent': '#22c55e'
      }
    }
  },
  plugins: []
}
