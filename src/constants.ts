import type { IconName } from "./components/icon";

export type Page = {
  type?: "blog";
  name: string;
  icon: IconName;
  href: string;
};

type BlogPage = Page & {
  description: string;
  coverImage: string;
};

export const MAIN_PAGES: Page[] = [
  { name: "Home", href: "/", icon: "Home" },
  { name: "About me", href: "/about", icon: "Id" },
  { name: "Timeline", href: "/timeline", icon: "Calendar" },
  { name: "Blogs", href: "/blogs", icon: "ChatBubbleBottomCenter" },
  { name: "Settings", href: "/settings", icon: "Cog" },
];

export const PROJECT_PAGES: Page[] = [{ name: "Pokémon", href: "/projects/pokemon", icon: "PokéBall" }];

export const BLOG_PAGES: BlogPage[] = [
  {
    name: "My first 2 years as a QA Engineer",
    description:
      "I didn’t know what to expect when I started as a QA Engineer. Two years later, here’s how it turned out.",
    href: "/blogs/qa-engineer",
    icon: "ChatBubbleBottomCenter",
    type: "blog",
    coverImage: "/images/magnifying-glass.webp",
  },
];

export const PAGES: Page[] = [...MAIN_PAGES, ...PROJECT_PAGES, ...BLOG_PAGES];

export const MAIL_TO = "mailto:gvisser.business@gmail.com";

export const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
