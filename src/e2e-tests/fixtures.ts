import { test as base } from "@playwright/test";
import { AboutPage } from "./page-objects/pages/aboutPage";
import { HomePage } from "./page-objects/pages/homePage";
import { NotFoundPage } from "./page-objects/pages/notFoundPage";
import { SettingsPage } from "./page-objects/pages/settingsPage";
import { TimelinePage } from "./page-objects/pages/timelinePage";

type Pages = {
  homePage: HomePage;
  aboutPage: AboutPage;
  timelinePage: TimelinePage;
  settingsPage: SettingsPage;
  notFoundPage: NotFoundPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => use(new HomePage(page)),
  aboutPage: async ({ page }, use) => use(new AboutPage(page)),
  timelinePage: async ({ page }, use) => use(new TimelinePage(page)),
  settingsPage: async ({ page }, use) => use(new SettingsPage(page)),
  notFoundPage: async ({ page }, use) => use(new NotFoundPage(page)),
});

export { expect } from "@playwright/test";
