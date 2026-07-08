/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // scans all your React files
  ],
  theme: {
    extend: {
      colors: {
        ioraPink: "#FFB6B9",
        ioraPeach: "#FAE3D9",
        ioraMint: "#BBDED6",
        ioraTeal: "#61C0BF",
      },
    },
  },
  plugins: [],
}
