const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        shake: "shake 15s infinite ease-in-out",
      },
      borderWidth: {
        1.5: "1.5px",
        6: "6px",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(0, 0) rotate(0)" },
          "3%": { transform: "translate(-10px, 0) rotate(-20deg)" },
          "6%": { transform: "translate(10px, 0) rotate(20deg)" },
          "9%": { transform: "translate(-10px, 0) rotate(-10deg)" },
          "12%": { transform: "translate(10px, 0) rotate(10deg)" },
          "15%": { transform: "translate(0, 0) rotate(0)" },
          "100%": { transform: "translate(0, 0) rotate(0)" },
        },
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
