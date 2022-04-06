const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "88rem",
      },
      maxHeight: {
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "54rem",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-safe-area"),
    require("tailwind-scrollbar-hide"),
  ],
};
