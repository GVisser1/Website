import { getTimeFrame } from "@/utils/dateUtil";
import { BadgeColor } from "../components/badge";

export type TimelineItem = {
  title: string;
  timeFrame: string;
  subTitle?: string;
  description?: string;
  status?: string;
  logoSrc?: string;
  href?: string;
  color?: BadgeColor;
};

export const timeLineData: TimelineItem[] = [
  {
    timeFrame: getTimeFrame(new Date(2023, 7, 1)),
    title: "Quality Assurance Engineer",
    subTitle: "MoreApp",
    description:
      "As a QA Engineer, it is my responsibility to ensure the quality of all software products at MoreApp. My tasks include manual testing, bug reporting, test automation, and close collaboration with fellow developers, UX designers, and the product owner.",
    status: "Completed",
    href: "https://moreapp.com",
    color: "gray",
  },
  {
    timeFrame: getTimeFrame(new Date(2023, 1, 6), new Date(2023, 6, 7)),
    title: "Graduation Internship",
    subTitle: "MoreApp",
    description:
      "During my graduation internship, I created a report designer prototype integrating MoreApp form data. I utilized React, TailwindCSS, and TypeScript for the frontend, Java for the backend, and implemented MongoDB for data storage.",
    status: "Completed",
    href: "https://moreapp.com",
    color: "pink",
  },
  {
    timeFrame: getTimeFrame(new Date(2022, 1, 21), new Date(2023, 0, 31)),
    title: "Software Engineer",
    subTitle: "MoreApp",
    description:
      "In my role as a part-time software engineer, my primary focus was addressing bugs within MoreApp's application. This involved working with technologies such as TypeScript, React, and TailwindCSS.",
    status: "Ongoing",
    href: "https://moreapp.com",
    color: "blue",
  },
  {
    timeFrame: getTimeFrame(new Date(2021, 8, 13), new Date(2022, 1, 11)),
    title: "Development Intern",
    subTitle: "MoreApp",
    description:
      "During my internship at MoreApp I was able to gain a lot of knowledge with TypeScript, TailwindCSS, React and SCRUM. I've also done a lot of Unit and E2E tests.",
    status: "Completed",
    href: "https://moreapp.com",
    color: "yellow",
  },
  {
    timeFrame: getTimeFrame(new Date(2019, 8, 1), new Date(2021, 6, 1)),
    title: "Computer Science",
    subTitle: "Rotterdam University of Applied Sciences",
    description:
      "During this study I mainly worked with Python, C# and SQL. I also followed two minors: Artificial Intelligence and Data Science.",
    status: "Graduated",
    href: "https://www.hogeschoolrotterdam.nl/",
    color: "red",
  },
  {
    timeFrame: getTimeFrame(new Date(2012, 8, 1), new Date(2019, 6, 1)),
    title: "Pre-university Education",
    subTitle: "Lentiz Reviuslyceum",
    description:
      "At secondary school I followed the Nature/Health profile. This includes subjects such as Physics, Chemistry, Biology and Mathematics A.",
    status: "Graduated",
    href: "https://www.lentiz.nl/reviuslyceum/",
    color: "green",
  },
];
