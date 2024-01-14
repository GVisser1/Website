import clsx from "clsx";

export type BadgeColor = "blue" | "gray" | "yellow" | "green" | "pink" | "red";
type BadgeProps = {
  className?: string;
  color?: BadgeColor;
  children: React.ReactNode;
};

export const Badge = ({ color = "blue", className, children }: BadgeProps) => (
  <span className={clsx("rounded-full px-3 py-0.5 text-xs font-semibold", badgeColors[color], className)}>
    {children}
  </span>
);

const badgeColors: Record<BadgeColor, string> = {
  blue: "bg-blue-100 text-blue-700",
  gray: "bg-gray-100 text-gray-700",
  yellow: "bg-yellow-100 text-yellow-700",
  green: "bg-emerald-100 text-emerald-700",
  pink: "bg-pink-100 text-pink-700",
  red: "bg-red-100 text-red-700",
};
