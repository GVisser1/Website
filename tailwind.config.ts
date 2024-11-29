import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import typographyPlugin from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["var(--inter)", ...fontFamily.sans],
      mono: fontFamily.mono,
      sans: fontFamily.sans,
      serif: fontFamily.serif,
    },
    outlineColor: {
      DEFAULT: "#3b82f6",
      transparent: "transparent",
    },
    outlineWidth: {
      DEFAULT: "1.5px",
    },
    extend: {
      screens: {
        xs: "480px",
        "2xs": "400px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#334155",
            h2: {
              color: "#3f3f46",
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "0.25rem",
            },
            a: {
              color: "#334155",
              textDecoration: "none",
              fontWeight: "600",
              borderBottom: "1px solid #2563eb",
              "&:hover": {
                borderBottomColor: "#1d4ed8",
                borderBottomWidth: "2px",
              },
            },
            img: {
              marginTop: "1rem",
              marginBottom: "1rem",
            },
          },
        },
        dark: {
          css: {
            maxWidth: "none",
            color: "#a1a1aa",
            h2: {
              color: "#FFFFFF",
              fontSize: "1.125rem",
              fontWeight: "600",
              marginBottom: "0.25rem",
            },
            a: {
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: "600",
              borderBottom: "1px solid #3b82f6",
              "&:hover": {
                borderBottomColor: "#60a5fa",
                borderBottomWidth: "2px",
              },
            },
          },
        },
      },
      width: {
        "42": "10.5rem",
      },
    },
  },
  plugins: [typographyPlugin],
};

export default config;
