/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
    },
    extend: {
      colors: {
        black: "#000",
        bgDark2: "#4a4e69",
        richblack: {
          1: "#1E1E1E",
          2: "#767676",
          3: "#f0f0f0fc",
        }
      },
    },
  },
  plugins: [],
};
