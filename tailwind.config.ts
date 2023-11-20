import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    extend: {
      borderWidth: {
        1.5: "1.5px",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      screens: {
        xs: "480px",
        "2xs": "320px",
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

export default config;
