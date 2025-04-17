import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import typographyPlugin from "@tailwindcss/typography";
import animationPlugin from "tailwindcss-animate";

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
      DEFAULT: "#3B82F6",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    outlineWidth: {
      DEFAULT: "1.5px",
    },
    strokeWidth: {
      xs: "0.5px",
      sm: "1px",
      md: "2px",
    },
    extend: {
      fontSize: {
        button: [
          "0.875rem",
          {
            lineHeight: "1rem",
            fontWeight: "500",
          },
        ],
        "button-lg": [
          "1rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "500",
          },
        ],
      },
      translate: {
        "54": "13.5rem",
      },
      screens: {
        xs: "480px",
      },
      spacing: {
        "4.5": "1.125rem",
        "42": "10.5rem",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#334155",
            h2: {
              color: "#3F3F46",
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "0.25rem",
            },
            a: {
              color: "#334155",
              textDecoration: "none",
              fontWeight: "600",
              borderBottom: "1px solid #2563EB",
              "&:hover": {
                borderBottomColor: "#1D4ED8",
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
            color: "#A1A1AA",
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
              borderBottom: "1px solid #3B82F6",
              "&:hover": {
                borderBottomColor: "#60A5fA",
                borderBottomWidth: "2px",
              },
            },
          },
        },
      },
    },
  },
  plugins: [typographyPlugin, animationPlugin],
};

export default config;
