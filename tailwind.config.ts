import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      inter: ["var(--inter)", ...fontFamily.sans],
    },
    outlineColor: {
      DEFAULT: "#3b82f6",
    },
    outlineWidth: {
      DEFAULT: "1.5px",
    },
    extend: {
      screens: {
        xs: "480px",
        "2xs": "320px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
