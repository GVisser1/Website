import type { IconName } from "./components/icon";

export type Page = {
  name: string;
  description?: string;
  icon: IconName;
  href: string;
  meta: {
    title: string;
    description: string;
  };
};

export const MAIN_PAGES = {
  home: {
    name: "Home",
    href: "/",
    icon: "Home",
    meta: {
      title: "Glenn Visser",
      description:
        "Personal website of Glenn Visser, a QA Engineer from Maassluis, the Netherlands, with a love for music, movies, and games.",
    },
  },
  about: {
    name: "About me",
    description: "Learn more about me and my love for games, music, and movies",
    href: "/about",
    icon: "Id",
    meta: {
      title: "About me - Glenn Visser",
      description:
        "Discover Glenn's passions for music, movies, gaming, and software quality. Learn about his career as a QA Engineer, favourite hobbies, and personal interests.",
    },
  },
  timeline: {
    name: "Timeline",
    description: "A chronological overview of my education and work experience",
    href: "/timeline",
    icon: "Calendar",
    meta: {
      title: "Timeline - Glenn Visser",
      description:
        "Explore a chronological overview of Glenn’s education and work experience, including studies at Rotterdam University of Applied Sciences and key roles at MoreApp",
    },
  },
} as const satisfies Record<string, Page>;

export const PAGES: Page[] = Object.values(MAIN_PAGES);

export const MAIL_TO = "mailto:gvisser.business@gmail.com";

// Page background per theme (--background-color-default), used for the mobile browser bar
export const THEME_COLORS = { light: "#ffffff", dark: "#0a0a0a" } as const;
