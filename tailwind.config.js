/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all files inside src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
