/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontfamily:
       {    
        ubuntu: ["Ubuntu", "sans-serif"]
      }
    },
  },
  plugins: [],
}