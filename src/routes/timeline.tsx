import { createFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import type { JSX } from "react";
import Header from "@/components/header";
import Image from "@/components/image";
import Page from "@/components/page";
import { MAIN_PAGES } from "@/constants";
import { getTimeFrame } from "@/utils/dateUtil";
import { isEven } from "@/utils/numberUtil";

const PAGE = MAIN_PAGES.timeline;

const TimelinePage = (): JSX.Element => (
  <Page>
    <Header title={PAGE.name} description={PAGE.description} />

    <div className="relative">
      <div className="absolute left-2 hidden h-full w-0.5 bg-sunken-tertiary tablet-ls:inset-x-0 tablet-ls:mx-auto tablet-ls:inline dark:bg-sunken-tertiary-dark" />
      <ol className="flex flex-col divide-y divide-secondary tablet-ls:gap-y-12 tablet-ls:divide-y-0 tablet-ls:px-5 tablet-ls:py-4 dark:!divide-secondary-dark">
        {timeLineData.map((item, i) => (
          <TimeLineItem key={item.timeFrame} item={item} align={isEven(i) ? "right" : "left"} />
        ))}
      </ol>
    </div>
  </Page>
);

type TimeLineItemProps = {
  item: TimelineItem;
  align: "left" | "right";
};
const TimeLineItem = ({ item, align }: TimeLineItemProps): JSX.Element => (
  <li
    key={item.title}
    className={clsx(
      "relative border-primary bg-default p-3 tablet-ls:-mx-5 tablet-ls:w-1/2 tablet-ls:rounded-md tablet-ls:border dark:border-primary-dark dark:bg-default-dark",
      align === "left" && "tablet-ls:ml-auto",
    )}
  >
    <div className="flex gap-x-2">
      {item.src && <Image src={item.src} alt="" className="my-auto size-10 rounded-full" />}
      <div>
        <p className="text-sm-regular text-secondary dark:text-secondary-dark">{item.timeFrame}</p>
        <h2 className="text-header-lg text-primary dark:text-primary-dark">{item.title}</h2>
        <p className="text-sm-regular text-secondary dark:text-secondary-dark">{item.subTitle}</p>
      </div>
    </div>
    <div
      className={clsx(
        "absolute top-0 mt-10 hidden size-2.5 translate-x-0 rounded-full bg-default ring-4 ring-primary tablet-ls:-mx-5 tablet-ls:flex",
        align === "right" ? "right-[-5px]" : "left-[-5px]",
      )}
    />
  </li>
);

type TimelineItem = {
  title: string;
  timeFrame: string;
  subTitle?: string;
  description?: string;
  status?: string;
  src?: string;
};

export const timeLineData: TimelineItem[] = [
  {
    timeFrame: getTimeFrame(new Date(2023, 7, 1)),
    title: "QA Engineer",
    subTitle: "MoreApp",
    src: "/images/timeline/moreapp.webp",
  },
  {
    timeFrame: getTimeFrame(new Date(2023, 1, 6), new Date(2023, 6, 7)),
    title: "Graduation Internship",
    subTitle: "MoreApp",
    src: "/images/timeline/moreapp.webp",
  },
  {
    timeFrame: getTimeFrame(new Date(2022, 1, 21), new Date(2023, 0, 31)),
    title: "Software Engineer",
    subTitle: "MoreApp",
    src: "/images/timeline/moreapp.webp",
  },
  {
    timeFrame: getTimeFrame(new Date(2021, 8, 13), new Date(2022, 1, 11)),
    title: "Development Intern",
    subTitle: "MoreApp",
    src: "/images/timeline/moreapp.webp",
  },
  {
    timeFrame: getTimeFrame(new Date(2019, 8, 1), new Date(2023, 6, 1)),
    title: "Computer Science",
    subTitle: "Rotterdam University of Applied Sciences",
    src: "/images/timeline/hr.jpg",
  },
  {
    timeFrame: getTimeFrame(new Date(2012, 8, 1), new Date(2019, 6, 1)),
    title: "Pre-university Education",
    subTitle: "Lentiz Reviuslyceum",
    src: "/images/timeline/lentiz.png",
  },
];

export const Route = createFileRoute("/timeline")({
  component: TimelinePage,
  head: () => ({
    meta: [{ title: PAGE.meta.title }, { name: "description", content: PAGE.meta.description }],
  }),
});
