import classNames from "classnames";
import { FC, Fragment } from "react";
import { Color } from "../types/Color";
import { Themes } from "../types/Themes";
import { isEven } from "../utils/numberUtil";
import { Card } from "./Card";
import { Icon } from "./Icon";

export interface TimelineItem {
  title: string;
  timeFrame: string;
  subTitle?: string;
  description?: string;
  status?: string;
  logoSrc?: string;
  href?: string;
  theme?: Color;
}

interface TimelineProps {
  className?: string;
  items: TimelineItem[];
}

export const Timeline: FC<TimelineProps> = ({ items, className }) => {
  const timeLineCard = (item: TimelineItem) => (
    <Card banner={item.timeFrame} title={item.title} status={item.status} theme={item.theme} />
  );

  const pointer = (theme: Color = "BLUE") => {
    const Theme = Themes[theme];
    return (
      <div
        className={classNames(
          "z-10 mt-1 h-10 w-10 rounded-full ring-4",
          Theme.bgColor,
          Theme.ringColor,
          Theme.textColor
        )}
      >
        <Icon overrideSize className="mx-auto" name="ChevronUpIcon" />
      </div>
    );
  };

  return (
    <div
      className={classNames("grid w-full grid-cols-3 gap-y-8 sm:grid-cols-5 sm:gap-y-0", className)}
    >
      {items.map((item, i) => (
        <Fragment key={item.title}>
          {i !== 0 && (
            <div className="relative col-span-3 my-auto flex items-center justify-center sm:hidden">
              {pointer(item.theme)}
              <div className="absolute z-[-5] h-28 w-0.5 bg-gray-200 transition dark:bg-gray-700" />
            </div>
          )}
          <div
            className={classNames(
              "col-span-3 sm:col-span-2 sm:mb-8",
              isEven(i) ? "flex" : "hidden sm:flex"
            )}
          >
            {isEven(i) && timeLineCard(item)}
          </div>

          <div className="relative col-span-1 mx-auto hidden w-full justify-center pt-3 sm:flex">
            {pointer(item.theme)}
            <div className="absolute flex h-full w-0.5 bg-gray-200 transition dark:bg-gray-700" />
          </div>

          <div
            className={classNames(
              "col-span-3 sm:col-span-2 sm:mb-8",
              !isEven(i) ? "flex" : "hidden sm:flex"
            )}
          >
            {!isEven(i) && timeLineCard(item)}
          </div>
        </Fragment>
      ))}
    </div>
  );
};
