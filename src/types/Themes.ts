import { Color } from "./Color";

export interface Theme {
  bgColor: string;
  textColor: string;
  ringColor: string;
}

export const Themes: Record<Color, Theme> = {
  BLUE: {
    bgColor: "bg-blue-100 dark:bg-blue-200",
    textColor: "text-blue-700 dark:text-blue-800",
    ringColor: "ring-blue-400",
  },
  GRAY: {
    bgColor: "bg-gray-100",
    textColor: "text-gray-700",
    ringColor: "ring-gray-400",
  },
  YELLOW: {
    bgColor: "bg-yellow-100 dark:bg-yellow-200",
    textColor: "text-yellow-700 dark:text-yellow-800",
    ringColor: "ring-yellow-500",
  },
  GREEN: {
    bgColor: "bg-emerald-100 dark:bg-emerald-200",
    textColor: "text-emerald-700 dark:text-emerald-800",
    ringColor: "ring-emerald-400",
  },
  PINK: {
    bgColor: "bg-pink-100",
    textColor: "text-pink-700",
    ringColor: "ring-pink-400",
  },
  RED: {
    bgColor: "bg-red-100",
    textColor: "text-red-700",
    ringColor: "ring-red-400",
  },
};
