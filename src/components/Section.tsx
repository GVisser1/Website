import clsx from "clsx";
import { Title } from "./Title";

export type SectionProps = {
  id: string;
  size?: "lg" | "md" | "sm";
  title?: { text: string; center?: boolean };
  className?: string;
  children: React.ReactNode;
};

export const Section = ({ id, size = "md", title, className, children }: SectionProps) => {
  const classes = clsx("mx-auto flex flex-col gap-y-4 bg-white py-20", {
    "px-8 max-w-screen-xl": size === "lg",
    "px-6 max-w-screen-lg": size === "md",
    "px-5 max-w-screen-sm": size === "sm",
  });

  return (
    <section id={id} className={classes}>
      {title && (
        <Title as="h2" className={title.center ? "text-center" : ""}>
          {title.text}
        </Title>
      )}
      <div className={clsx(`flex flex-col gap-y-4`, className)}>{children}</div>
    </section>
  );
};
