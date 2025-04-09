/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#CDB937",
        "primary-hover": "#e3cc50",
        "dark-bg": "#141414",
        "dark-surface": "#1A1A1A",
        "dark-surface-hover": "#222222",
        "light-bg": "#FFFFFF",
        "light-surface": "#F5F5F5",
        "light-surface-hover": "#E5E5E5",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
