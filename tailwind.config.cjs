/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/**/*.{js,ts,jsx,tsx}", // ✅ needed for HeroUI
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
