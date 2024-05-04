import clsx from "clsx";
import { type ReactNode, forwardRef } from "react";

export type SectionProps = {
  id: string;
  size?: "lg" | "md" | "sm";
  className?: string;
  children: ReactNode;
};

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, size = "md", className, children }: SectionProps, ref): JSX.Element => {
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
      <section ref={ref} id={id} className={classes}>
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export default Section;
