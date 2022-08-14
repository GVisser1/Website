import classNames from "classnames";
import React, { ReactElement } from "react";
import { Color } from "../types/Color";
import { Colors } from "../utils/colorUtils";
import { Badge } from "./Badge";
import { Title } from "./Title";

export interface CardProps {
  title?: string;
  labels?: string[];
  labelColors?: Color[];
  color?: Color;
  hover?: boolean;
  className?: string;
  image?: ReactElement;
  button?: ReactElement;
  header?: ReactElement;
}

export const Card: React.FC<CardProps> = ({
  title,
  header,
  labels,
  labelColors,
  hover = true,
  image,
  button,
  className,
  ...props
}) => {
  const classes = classNames(
    {
      "w-full transition overflow-hidden rounded-xl border border-gray-200 bg-white shadow-gray-300 dark:shadow-current shadow-md dark:border-slate-700 dark:bg-slate-800":
        true,
      "text-center": header,
      "pointer:hover:scale-105": hover,
    },
    className
  );

  return (
    <div className={classes}>
      {header}
      {image}
      <div
        className={classNames(
          "px-3 py-3 ",
          header && "border-t-2 border-gray-100 transition dark:border-slate-700"
        )}
      >
        <Title as="h4" className="line-clamp-1">
          {title}
        </Title>
        {props.children}
        {labels && (
          <div
            className={classNames(
              "mt-3 flex flex-wrap gap-0.5 text-center",
              header && "justify-center"
            )}
          >
            {labels.map((label, i) => (
              <Badge key={i} color={labelColors ? labelColors[i] : Colors[i]}>
                {label}
              </Badge>
            ))}
          </div>
        )}
        {button}
      </div>
    </div>
  );
};
