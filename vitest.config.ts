import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["src/**/**.test.{ts,tsx}"],
    globals: true,
    clearMocks: true,
    testTimeout: 10_000,
    coverage: {
      include: ["src/**/**.{ts,tsx}"],
      reporter: ["lcov", "text", "html", "clover", "json"],
    },
  },
});
