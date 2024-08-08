/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        64:'64px'
      },
      fontFamily:{
        ibm: ['IBM Plex Mono'],
        inter: ['Inter'],
      },
      colors: {
        "yellow": "#FFFB47",
        "cream": "#FFF5EA",
        "purple": "#9747FF",
        
      }
    },
  },
  plugins: [],
}