/** @type {import('tailwindcss').Config} */
module.exports = {
  'darkMode': 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "redish-pink": "#E94560",
        "dark-blue": "#1A1A2E",
        "light-blue": "#0F3460",
        "dark-custard": "#867A7A",
        "light-custard": "#DBC8AC",
        "light-white":"#DBEDF3",
        "greenish":"#00818A",
        "dark-black":"#283149",
        "dark-teal":"#A5C9CA",
        "light-black":"#404B69"
      },
      gridTemplateColumns: {
        "1-to-2": "minmax(200px, 1fr) 2fr",
        "icon-buttons-col": "30px auto",
        "1-to-2-400":"1fr minmax(600px, 2fr)"
      },
      gridTemplateRows: {
        "10%-auto":"10% 90%"
      }
    },
  },
  plugins: [],
}