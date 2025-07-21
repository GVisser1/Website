import type { JSX } from "react";
import clsx from "clsx";
import { TextLink } from "./button";
import Pill from "./pill";

type CardProps = {
  className?: string;
  title: string;
  description: string;
  link: string;
  src: string;
};

const Card = (props: CardProps): JSX.Element => {
  const classes = clsx(
    "relative overflow-hidden rounded-lg border border-primary dark:border-primary-dark",
    props.className,
  );

  return (
    <div className={classes}>
      <img src={props.src} alt="" className="h-32 w-full object-cover" />
      <div className="mt-1 flex flex-col items-start p-4">
        <div className="flex flex-wrap gap-2">
          <Pill colour="neutral" label="5 min read" />
          <Pill colour="neutral" label="2 July 2025" />
        </div>
        <h2 className="mt-1 text-lg font-semibold text-primary dark:text-primary-dark">{props.title}</h2>
        <p className="mt-1 text-secondary dark:text-secondary-dark">{props.description}</p>
        <TextLink href={props.link} variant="light" label="Read blog" className="mt-2 ml-auto" />
      </div>
    </div>
  );
};

export default Card;
