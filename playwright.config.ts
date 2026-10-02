import { defineConfig, devices } from "@playwright/test";
import { minutes, seconds } from "@/utils/timeUtil";

const baseURL = process.env.E2E_BASE_URL || "http://localhost:5173";
const usesLocalDevServer = new URL(baseURL).hostname === "localhost";

export default defineConfig({
  forbidOnly: process.env.CI != null,
  fullyParallel: true,
  globalTimeout: minutes(10),
  outputDir: "src/e2e-tests/test-results",
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  reporter: process.env.CI ? [["blob"], ["list"]] : [["html", { outputFolder: "src/e2e-tests/test-reports" }]],
  retries: process.env.CI ? 1 : 0,
  snapshotPathTemplate: "src/e2e-tests/snapshots/{testFilePath}/{projectName}/{arg}{ext}",
  testDir: "src/e2e-tests",
  timeout: seconds(10),
  use: { baseURL, trace: "on-first-retry" },
  webServer: usesLocalDevServer
    ? {
        command: "pnpm dev",
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: minutes(2),
        gracefulShutdown: { signal: "SIGTERM", timeout: seconds(10) },
      }
    : undefined,
  workers: process.env.CI ? 1 : undefined,
});
