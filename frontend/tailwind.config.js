/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "rgb(7, 57, 64)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

