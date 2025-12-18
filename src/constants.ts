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
        "Welcome to the portfolio of Glenn Visser, a QA Engineer from Maassluis, Netherlands. Passionate about music, movies, gaming, and programming.",
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
  settings: {
    name: "Settings",
    description: "Personalize your experience by adjusting the settings to your liking",
    href: "/settings",
    icon: "Cog",
    meta: {
      title: "Settings - Glenn Visser",
      description:
        "Customize your experience by changing the website’s theme and font. Personalize the look and feel to suit your preferences.",
    },
  },
} as const satisfies Record<string, Page>;

export const PROJECT_PAGES = {
  pokemon: {
    name: "Pokémon",
    description: "Explore the world of Pokémon.",
    href: "/projects/pokemon",
    icon: "PokéBall",
    meta: {
      title: "Pokémon - Glenn Visser",
      description:
        "Browse and search through a collection of Pokémon. Discover details, filter by name, and explore the world of Pokémon ",
    },
  },
} as const satisfies Record<string, Page>;

export const PAGES: Page[] = [...Object.values(MAIN_PAGES), ...Object.values(PROJECT_PAGES)];

export const MAIL_TO = "mailto:gvisser.business@gmail.com";

export const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
