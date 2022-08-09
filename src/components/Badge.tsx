import classNames from "classnames";
import React from "react";

interface BadgeProps {
  className?: string;
  color?: string;
}

export const Badge: React.FC<BadgeProps> = ({ color = "blue", className, children }) => {
  const classes = classNames(
    {
      "rounded py-0.5 px-3 text-xs font-semibold": true,
      "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800": color === "blue",
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-200 dark:text-emerald-900":
        color === "green",
      "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900": color === "red",
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-800": color === "yellow",
      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300": color === "gray",
      "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900": color === "pink",
    },
    className
  );
  return <span className={classes}>{children}</span>;
};
