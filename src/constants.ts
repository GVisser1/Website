import type { IconName } from "./components/icon";

export type Page = { href: string; name: string; icon: IconName };

export const MAIN_PAGES: Page[] = [
  { name: "Home", href: "/", icon: "Home" },
  { name: "About me", href: "/about", icon: "Id" },
  { name: "Timeline", href: "/timeline", icon: "Calendar" },
  { name: "Settings", href: "/settings", icon: "Cog" },
];

export const PROJECT_PAGES: Page[] = [{ name: "Pokémon", href: "/projects/pokemon", icon: "PokéBall" }];

export const PAGES: Page[] = [...MAIN_PAGES, ...PROJECT_PAGES];

export const MAIL_TO = "mailto:gvisser.business@gmail.com";
