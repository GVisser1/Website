import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "index.html"],
  theme: {
    fontFamily: {
      inter: ["var(--inter)", ...fontFamily.sans],
    },
    extend: {
      borderWidth: {
        1.5: "1.5px",
      },
      screens: {
        xs: "480px",
        "2xs": "320px",
      },
      ringWidth: {
        0.5: "0.5px",
        1.5: "1.5px",
      },
    },
  },
};

export default config;
