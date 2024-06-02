type BadgeProps = { label: string };
const Badge = ({ label }: BadgeProps): JSX.Element => (
  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100">
    {label}
  </span>
);

export default Badge;
