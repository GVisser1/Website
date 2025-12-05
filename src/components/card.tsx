import clsx from "clsx";
import type { JSX } from "react";
import TextButton from "./button/textButton";
import Image from "./image";
import Pill from "./pill";

type CardProps = {
  className?: string;
  title: string;
  description: string;
  link: string;
  src: string;
};

const Card = (props: CardProps): JSX.Element => {
  const classes = clsx("relative", props.className);

  return (
    <div className={classes}>
      <Image src={props.src} alt="" className="h-50 w-full rounded-lg object-cover" />
      <div className="mt-3 flex flex-col items-start gap-y-1">
        <h2 className="text-header-xl text-primary dark:text-primary-dark">{props.title}</h2>
        <p className="text-base-regular text-secondary dark:text-secondary-dark">
          {props.description}
        </p>
        <div className="flex w-full items-center justify-between gap-x-1">
          <div className="grid grid-cols-2 gap-x-1">
            <Pill className="justify-self-start" type="neutral" label="2 min read" />
            <Pill className="justify-self-start" type="neutral" label="2 July 2025" />
          </div>
          <TextButton
            type="link"
            href={props.link}
            variant="light"
            size="medium"
            label="Read blog"
            className="ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
