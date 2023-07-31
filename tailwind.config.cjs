const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {
      borderWidth: {
        1.5: "1.5px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        "screen-dvh": "100dvh",
      },
      ringWidth: {
        0.5: "0.5px",
        1.5: "1.5px",
      },
    },
  },
  plugins: [
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
      addVariant("pointer", "@media (hover: hover) and (pointer: fine)");
    }),
  ],
};
