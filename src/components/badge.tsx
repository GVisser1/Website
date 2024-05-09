import clsx from "clsx";

const badgeColors = {
  blue: "bg-blue-100 text-blue-700",
  gray: "bg-gray-100 text-gray-700",
  yellow: "bg-yellow-100 text-yellow-700",
  green: "bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100",
  pink: "bg-pink-100 text-pink-700",
  red: "bg-red-100 text-red-700",
};

export type BadgeColor = keyof typeof badgeColors;
type BadgeProps = { label: string; color?: BadgeColor; className?: string };

const Badge = ({ color = "blue", label, className }: BadgeProps): JSX.Element => (
  <span className={clsx("rounded-full px-2 py-0.5 text-xs font-semibold", badgeColors[color], className)}>{label}</span>
);

export default Badge;
