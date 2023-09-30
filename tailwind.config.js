/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['Manrope'],
        'inter': ['Inter'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

