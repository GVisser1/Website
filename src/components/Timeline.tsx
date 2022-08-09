import classNames from "classnames";
import React from "react";
import { Card } from "./Card";
import { Icon, IconType } from "./Icon";

export interface TimelineItem {
  title: string;
  timeFrame: string;
  subTitle?: string;
  description?: string;
  color?: string;
  img?: React.ReactElement;
  href?: string;
  labels?: string[];
}

interface TimelineProps {
  className?: string;
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  const isEven = (num: number) => num % 2 === 0;
  const timeLineCard = (item: TimelineItem) => (
    <Card
      title={item.title}
      subTitle={item.subTitle}
      description={item.description}
      headerText={item.timeFrame}
      labels={item.labels}
      color={item.color}
      href={item.href}
    />
  );

  const classes = (color: string) =>
    classNames({
      "bg-blue-100 ring-blue-400 text-blue-400": color === "blue",
      "bg-emerald-100 ring-emerald-400 text-emerald-400": color === "green",
      "bg-red-100 ring-red-400 text-red-400": color === "red",
      "bg-yellow-100 ring-yellow-500 text-yellow-500": color === "yellow",
      "bg-gray-100 ring-gray-400 text-gray-400": color === "gray",
      "bg-pink-100 ring-pink-400 text-pink-400": color === "pink",
    });

  return (
    <div className={classNames("grid w-full grid-cols-4 sm:grid-cols-5", className)}>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <div className="col-span-2 mb-12">{isEven(i) && timeLineCard(item)}</div>
          <div className="relative col-span-1 mx-auto hidden w-full justify-center pt-3 sm:flex">
            <div
              className={classNames(
                "absolute z-10 mt-1 h-10 w-10 rounded-full ring-4",
                classes(item.color || "blue")
              )}
            >
              <Icon overrideSize className="mx-auto" name={IconType.CHEVRON_UP} />
            </div>
            <div className="absolute flex h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="col-span-2 mb-12">{!isEven(i) && timeLineCard(item)}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Timeline;
