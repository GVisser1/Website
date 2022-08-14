const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {
      borderWidth: {
        1.5: "1.5px",
        6: "6px",
      },
      maxHeight: {
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "54rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      minWidth: {
        "1/4": "25%",
      },
      ringWidth: {
        0.5: "0.5px",
        1.5: "1.5px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    plugin(({ addVariant }) => {
      addVariant("pointer", "@media (hover: hover)");
    }),
  ],
};
