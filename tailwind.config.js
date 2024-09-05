/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "836px",
      lg: "976px",
      xl: "1200px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        primaryColor: "#7065F0",
        secondaryColor: "#100A55",
        purpleShade: {
          100: "#F0EFFB",
          200: "#E0DEF7"
        }
      },
    },
  },
  plugins: [],
};