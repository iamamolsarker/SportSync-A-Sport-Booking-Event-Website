/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#ffffff",
          "base-content": "#494848", 
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}
