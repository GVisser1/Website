import clsx from "clsx";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { TimeLineData, TimelineItem } from "../../data/TimelineData";
import { Color } from "../../types/Color";
import { Themes } from "../../types/Themes";
import { isEven } from "../../utils/numberUtil";
import { Card } from "../Card";
import { Icon } from "../Icon";
import { Section } from "../Section";

export const Timeline = () => {
  const { t } = useTranslation();
  const { timeLineItems } = TimeLineData();

  const timeLineCard = (item: TimelineItem) => (
    <Card
      className="w-full"
      theme={item.theme}
      title={item.title}
      subTitle={item.subTitle}
      description={item.description}
      href={item.href}
      banner={item.timeFrame}
      status={item.status}
    />
  );

  const pointer = (theme: Color = "BLUE") => {
    const Theme = Themes[theme];
    return (
      <div
        className={clsx(
          "z-10 mt-1 h-10 w-10 rounded-full ring-4",
          Theme.bgColor,
          Theme.ringColor,
          Theme.textColor,
        )}
      >
        <Icon overrideSize className="mx-auto" name="ChevronUpIcon" />
      </div>
    );
  };

  return (
    <Section id="timeline" title={t("TIMELINE")} size="lg">
      <div className="grid grid-cols-3 gap-y-8 sm:grid-cols-5 sm:gap-y-0">
        {timeLineItems.map((item, i) => (
          <Fragment key={item.title}>
            {i !== 0 && (
              <div className="relative col-span-3 my-auto flex items-center justify-center sm:hidden">
                {pointer(item.theme)}
                <div className="absolute z-[-5] h-28 w-0.5 bg-gray-300 transition dark:bg-gray-700" />
              </div>
            )}
            <div
              className={clsx(
                "col-span-3 sm:col-span-2 sm:mb-8",
                isEven(i) ? "flex" : "hidden sm:flex",
              )}
            >
              {isEven(i) && timeLineCard(item)}
            </div>

            <div className="relative col-span-1 mx-auto hidden w-full justify-center pt-3 sm:flex">
              {pointer(item.theme)}
              <div className="absolute flex h-full w-0.5 bg-gray-300 transition dark:bg-gray-700" />
            </div>

            <div
              className={clsx(
                "col-span-3 sm:col-span-2 sm:mb-8",
                !isEven(i) ? "flex" : "hidden sm:flex",
              )}
            >
              {!isEven(i) && timeLineCard(item)}
            </div>
          </Fragment>
        ))}
      </div>
    </Section>
  );
};
