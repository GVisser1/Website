import type { Metadata } from "next/types";
import type { JSX } from "react";
import clsx from "clsx";
import Header from "../../components/header";
import { isEven } from "../../utils/numberUtil";
import Pill from "../../components/pill";
import { getTimeFrame } from "../../utils/dateUtil";

export const metadata: Metadata = {
  title: "Timeline",
  description: "A chronological overview of my education and work experience",
};

const TimelinePage = (): JSX.Element => (
  <>
    <Header title="Timeline" description="A chronological overview of my education and work experience" />

    <div className="relative">
      <div className="absolute left-2 h-full w-0.5 bg-zinc-200 shadow-md sm:inset-x-0 sm:mx-auto dark:bg-zinc-700" />
      <ol>
        {timeLineData.map((item, i) => (
          <TimeLineItem key={item.timeFrame} item={item} align={isEven(i) ? "right" : "left"} />
        ))}
      </ol>
    </div>
  </>
);

type TimeLineItemProps = {
  item: TimelineItem;
  align: "left" | "right";
};
const TimeLineItem = ({ item, align }: TimeLineItemProps): JSX.Element => (
  <li
    key={item.title}
    className={clsx(
      "relative py-5 pl-8 sm:w-1/2 sm:px-5",
      align === "right" ? "sm:text-end" : "sm:ml-auto sm:text-start",
    )}
  >
    <Pill colour="green" label={item.timeFrame} />
    <div className="mt-1">
      <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">{item.title}</h2>
      <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{item.subTitle}</p>
    </div>
    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{item.description}</p>

    <div
      className={clsx(
        "absolute top-0 mt-7 size-2.5 -translate-x-7 rounded-full bg-white ring-4 ring-blue-600 sm:translate-x-0 dark:bg-white dark:ring-blue-600",
        align === "right" ? "sm:right-[-5px]" : "sm:left-[-5px]",
      )}
    />
  </li>
);

export default TimelinePage;

type TimelineItem = {
  title: string;
  timeFrame: string;
  subTitle?: string;
  description?: string;
  status?: string;
  logoSrc?: string;
  href?: string;
};

const timeLineData: TimelineItem[] = [
  {
    timeFrame: getTimeFrame(new Date(2023, 7, 1)),
    title: "Quality Assurance Engineer",
    subTitle: "MoreApp",
    description:
      "It is my responsibility to ensure the quality of all software products at MoreApp. My tasks include manual testing, bug reporting, test automation, and close collaboration with developers, UX designers, and the PO.",
    status: "Completed",
    href: "https://moreapp.com",
  },
  {
    timeFrame: getTimeFrame(new Date(2023, 1, 6), new Date(2023, 6, 7)),
    title: "Graduation Internship",
    subTitle: "MoreApp",
    description:
      "During my graduation internship, I created a report designer prototype integrating MoreApp form data. I utilized React, TailwindCSS, and TypeScript for the frontend, Java for the backend, and implemented MongoDB for data storage.",
    status: "Completed",
    href: "https://moreapp.com",
  },
  {
    timeFrame: getTimeFrame(new Date(2022, 1, 21), new Date(2023, 0, 31)),
    title: "Software Engineer",
    subTitle: "MoreApp",
    description:
      "In my role as a part-time software engineer, my primary focus was addressing bugs within MoreApp's application. This involved working with technologies such as TypeScript, React, and TailwindCSS.",
    status: "Ongoing",
    href: "https://moreapp.com",
  },
  {
    timeFrame: getTimeFrame(new Date(2021, 8, 13), new Date(2022, 1, 11)),
    title: "Development Intern",
    subTitle: "MoreApp",
    description:
      "During my internship at MoreApp I was able to gain a lot of knowledge with TypeScript, TailwindCSS, React and SCRUM. I've also done a lot of Unit and E2E tests.",
    status: "Completed",
    href: "https://moreapp.com",
  },
  {
    timeFrame: getTimeFrame(new Date(2019, 8, 1), new Date(2023, 6, 1)),
    title: "Computer Science",
    subTitle: "Rotterdam University of Applied Sciences",
    description:
      "During this study I mainly worked with Python, C# and SQL. I also followed two minors: Artificial Intelligence and Data Science.",
    status: "Graduated",
    href: "https://www.hogeschoolrotterdam.nl/",
  },
  {
    timeFrame: getTimeFrame(new Date(2012, 8, 1), new Date(2019, 6, 1)),
    title: "Pre-university Education",
    subTitle: "Lentiz Reviuslyceum",
    description:
      "At secondary school I followed the Nature/Health profile. This includes subjects such as Physics, Chemistry, Biology and Mathematics A.",
    status: "Graduated",
    href: "https://www.lentiz.nl/reviuslyceum/",
  },
];
