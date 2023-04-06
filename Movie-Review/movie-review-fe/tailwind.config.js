/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "max-w-screen-lg": "1100px",
      },
    },
  },
  plugins: [],
};
