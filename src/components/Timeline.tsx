import classNames from "classnames";
import { Fragment } from "react";
import { Color } from "../types/Color";
import { getCardTheme, getTimelineIconTheme } from "../utils/colorUtils";
import { isEven } from "../utils/numberUtil";
import { Card } from "./Card";
import { Icon, IconType } from "./Icon";
import Text from "./Text";

export interface TimelineItem {
  title: string;
  timeFrame: string;
  subTitle?: string;
  description?: string;
  color?: Color;
  labels?: string[];
}

interface TimelineProps {
  className?: string;
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  const timeLineCard = (item: TimelineItem) => (
    <Card
      title={item.title}
      header={
        <div className={classNames("p-2", getCardTheme(item.color ?? "BLUE"))}>
          <p className="text-xs line-clamp-1">{item.timeFrame}</p>
        </div>
      }
      labels={item.labels}
      labelColors={[item.color ?? "BLUE"]}
      color={item.color}
    >
      {item.subTitle && (
        <Text className="line-clamp-1" size="sm" color="medium">
          {item.subTitle}
        </Text>
      )}
      {item.description && (
        <Text className="line-clamp-3" size="sm" color="medium">
          {item.description}
        </Text>
      )}
    </Card>
  );

  return (
    <div
      className={classNames("grid w-full grid-cols-3 gap-y-8 sm:grid-cols-5 sm:gap-y-0", className)}
    >
      {items.map((item, i) => (
        <Fragment key={i}>
          {/*  */}
          {i !== 0 && (
            <div className="relative col-span-3 my-auto flex items-center justify-center sm:hidden">
              <div
                className={classNames(
                  "z-10 mt-1 h-10 w-10 rounded-full ring-4 ring-current",
                  getTimelineIconTheme(items[i].color ?? "BLUE")
                )}
              >
                <Icon overrideSize className="mx-auto" name="ChevronUpIcon" />
              </div>
              <div className="absolute h-[104px] w-0.5 bg-gray-200 transition dark:bg-gray-700" />
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
            <div
              className={classNames(
                "absolute z-10 mt-1 h-10 w-10 rounded-full ring-4 ring-current",
                "shadow-lg shadow-slate-300 dark:shadow-slate-900",
                getTimelineIconTheme(item.color ?? "BLUE")
              )}
            >
              <Icon overrideSize className="mx-auto" name="ChevronUpIcon" />
            </div>
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

export default Timeline;
