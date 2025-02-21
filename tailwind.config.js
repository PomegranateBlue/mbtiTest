/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,tsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "12px",
      md: "18px",
      lg: "30px",
      xl: "36px",
    },
    extend: {},
  },
  plugins: [],
};
