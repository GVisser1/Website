import AxeBuilder from "@axe-core/playwright";
import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export const analyzeA11yOfPage = async (page: Page): Promise<void> => {
  const analyzePage = new AxeBuilder({ page }).analyze();
  const { violations } = await analyzePage;

  expect.soft(violations).toEqual([]);
};
