/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: "#FEEFDD",
        primary: "#4e2828", // 240,86,199
        secondary: "#f4c06f",
        tertiary:"#f38a5e",
      },
      dropShadow: {
        dark: "0.35rem 0.35rem 0.2rem rgba(0, 0, 0, 0.8)",
        dark0: "0.1rem 0.2rem 0rem rgba(0, 0, 0, 0.8)",
        dark1: "0rem 0rem 2rem #FFFFFF",
      },
    },
  },
  plugins: [],
}
