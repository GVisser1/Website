import clsx from "clsx";

export type SectionProps = {
  id: string;
  size?: "lg" | "md" | "sm";
  className?: string;
  children: React.ReactNode;
};

const Section = ({ id, size = "md", className, children }: SectionProps): JSX.Element => {
  const classes = clsx(
    "mx-auto py-20",
    {
      "px-8 max-w-screen-xl": size === "lg",
      "px-6 max-w-screen-lg": size === "md",
      "px-5 max-w-screen-sm": size === "sm",
    },
    className,
  );

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
};

export default Section;
