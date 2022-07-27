const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {
      borderWidth: {
        1.5: "1.5px",
      },
      maxHeight: {
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "54rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      ringWidth: {
        0.5: "0.5px",
        1.5: "1.5px",
      },
      screens: {
        pointer: { raw: "(hover: hover)" },
        touch: { raw: "(hover: none)" },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
