const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {
      maxWidth: {
        "screen-3xl": "1792px",
      },
      backgroundImage: {
        main: "url('Assets/Images/GlennMain.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-safe-area"),
  ],
};
