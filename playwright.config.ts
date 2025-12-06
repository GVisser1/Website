import { defineConfig, devices } from "@playwright/test";
import { minutes, seconds } from "./e2e-tests/utils/timeUtil";

export default defineConfig({
  forbidOnly: process.env.CI != null,
  fullyParallel: true,
  globalTimeout: minutes(5),
  outputDir: "e2e-tests/test-results",
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  reporter: process.env.CI ? "blob" : [["html", { outputFolder: "e2e-tests/test-reports" }]],
  retries: process.env.CI ? 2 : 0,
  testDir: "e2e-tests",
  timeout: seconds(10),
  use: {
    baseURL: process.env.CI ? "https://glennvisser.com" : "http://localhost:5173",
    trace: "on-first-retry",
  },
  workers: process.env.CI ? 1 : undefined,
});
