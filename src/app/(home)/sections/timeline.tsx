"use client";

import clsx from "clsx";
import { timeLineData } from "../../../data/timelineData";
import { isEven } from "../../../utils/numberUtil";
import Badge from "../../../components/badge";
import Text from "../../../components/text";
import Title from "../../../components/title";
import Section from "@/components/section";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/button";
import { useInView } from "react-intersection-observer";

const Timeline = (): JSX.Element => {
  const ref = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [showCollapseButton, setShowCollapseButton] = useState(false);
  const { ref: inViewRef, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (!expanded || !inView) return;
    const onScroll = (): void => {
      if (!ref.current) return;
      const bodyRect = document.body.getBoundingClientRect();
      const rect = ref.current.getBoundingClientRect();
      const middle = rect.top + rect.height / 4 - bodyRect.top - window.innerHeight / 2;
      const isHalfWay = window.scrollY > middle;

      if (showCollapseButton && !isHalfWay) {
        setShowCollapseButton(false);
      } else if (!showCollapseButton && isHalfWay) {
        setShowCollapseButton(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return (): void => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [expanded, showCollapseButton, inView]);

  const filteredTimeLineData = expanded ? timeLineData : timeLineData.slice(0, 3);

  return (
    <Section ref={ref} id="timeline">
      <Title as="h2" className="mb-2 sm:text-center">
        Timeline
      </Title>
      <div className="relative">
        <div ref={inViewRef} className="relative overflow-hidden">
          <div className="absolute left-2 h-full w-0.5 bg-gray-200 shadow-md dark:bg-zinc-700 sm:inset-x-0 sm:mx-auto" />
          {filteredTimeLineData.map((item, i) => (
            <TimeLineItem key={item.timeFrame} item={item} align={isEven(i) ? "right" : "left"} />
          ))}
        </div>
        <div
          className={clsx(
            "pointer-events-none inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pb-8 pt-32 dark:from-zinc-900",
            expanded
              ? {
                  "sticky -mt-24 transition-opacity duration-300": true,
                  "opacity-0": !showCollapseButton,
                  "opacity-100": showCollapseButton,
                }
              : "absolute",
          )}
        >
          <Button
            variant="outline"
            onClick={() => setExpanded(!expanded)}
            label={expanded ? "Show less" : "Show more"}
            icon={expanded ? "ChevronUpIcon" : "ChevronDownIcon"}
            className="pointer-events-auto"
          />
        </div>
      </div>
    </Section>
  );
};

type TimeLineItemProps = {
  item: (typeof timeLineData)[number];
  align: "left" | "right";
};
const TimeLineItem = ({ item, align }: TimeLineItemProps): JSX.Element => (
  <div
    key={item.title}
    className={clsx(
      "relative py-5 pl-8 sm:w-1/2 sm:px-5",
      align === "right" ? "sm:text-end" : "sm:ml-auto sm:text-start",
    )}
  >
    <Badge color="green" label={item.timeFrame} />
    <div className="mt-1">
      <Title as="h3">{item.title}</Title>
      <Text size="sm" weight="semibold" color="medium">
        {item.subTitle}
      </Text>
    </div>
    <Text size="sm" color="medium" className="mt-2">
      {item.description}
    </Text>

    <div
      className={clsx(
        "absolute top-0 mt-7 size-2.5 -translate-x-7 rounded-full bg-white ring-4 ring-blue-600 dark:bg-white dark:ring-blue-600 sm:translate-x-0",
        align === "right" ? "sm:right-[-5px]" : "sm:left-[-5px]",
      )}
    />
  </div>
);

export default Timeline;
