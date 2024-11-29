/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71"
      },
      container: {
        padding: "2rem",
        center: true
      },
      screens: {
        sm: "640px",
        md: "768px"
      }
    },
  },
  plugins: [],
}

