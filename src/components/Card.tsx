import classNames from "classnames";
import React, { ReactElement } from "react";
import { Color } from "../types/Color";
import { Badge } from "./Badge";
import { Title } from "./Title";

export interface CardProps {
  title: string;
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
  labelColors = ["BLUE"],
  hover = true,
  image,
  button,
  className,
  ...props
}) => {
  const classes = classNames(
    {
      "w-full overflow-hidden bg-clip-padding rounded-xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800":
        true,
      "transition duration-300": true,
      "text-center": header,
      "pointer:hover:scale-105": hover,
    },
    className
  );

  return (
    <div className={classes}>
      {header}
      {image}
      <div className="px-3 py-3">
        <Title as="h4" className="line-clamp-1">
          {title}
        </Title>
        {props.children}
        {labels && (
          <div
            className={classNames(
              "mt-3 flex flex-wrap gap-1 text-center",
              header && "justify-center"
            )}
          >
            {labels.map((label, i) => (
              <Badge key={i} color={labelColors[i] ?? "BLUE"}>
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
