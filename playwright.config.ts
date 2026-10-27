import { mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { defineConfig, devices } from "@playwright/test";
import { minutes, seconds } from "@/utils/timeUtil";

const baseURL = process.env.E2E_BASE_URL || "http://localhost:5173";
const usesLocalDevServer = new URL(baseURL).hostname === "localhost";
const isCI = process.env.CI != null;

// On macOS 27, Playwright's Firefox still looks up the real Firefox's data folder, which macOS now protects, and quits
// with "Could not find profile folder". A separate home folder for it avoids that. Fixed in Firefox 158; remove this
// once Playwright ships it: https://github.com/microsoft/playwright/issues/42768
const getFirefoxLaunchOptions = (): { env?: undefined } | { env: { CFFIXED_USER_HOME: string } } => {
  if (process.platform !== "darwin") {
    return {};
  }
  const home = join(tmpdir(), "playwright-firefox-home");
  // Firefox only uses the folder if it already exists.
  mkdirSync(home, { recursive: true });
  return { env: { ...process.env, CFFIXED_USER_HOME: home } };
};

export default defineConfig({
  forbidOnly: isCI,
  fullyParallel: true,
  globalTimeout: minutes(10),
  outputDir: "src/e2e-tests/test-results",
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], launchOptions: getFirefoxLaunchOptions() },
    },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  reporter: isCI
    ? [["html", { outputFolder: "src/e2e-tests/test-reports", open: "never" }], ["github"], ["list"]]
    : [["html", { outputFolder: "src/e2e-tests/test-reports" }]],
  retries: isCI ? 1 : 0,
  snapshotPathTemplate: "src/e2e-tests/snapshots/{testFilePath}/{projectName}/{arg}{ext}",
  testDir: "src/e2e-tests",
  timeout: seconds(10),
  use: { baseURL, trace: "on-first-retry" },
  webServer: usesLocalDevServer
    ? {
        // On CI, test the production build instead of the dev server.
        command: isCI ? "pnpm preview" : "pnpm dev",
        url: baseURL,
        reuseExistingServer: !isCI,
        timeout: minutes(2),
        gracefulShutdown: { signal: "SIGTERM", timeout: seconds(10) },
      }
    : undefined,
  workers: isCI ? 2 : undefined,
});
