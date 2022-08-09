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
    plugin(({ addUtilities, addVariant }) => {
      addUtilities({
        ".scrollbar-none": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
      addVariant("pointer", "@media (hover: hover)");
    }),
  ],
};
