import { beforeEach, describe, expect, it, vi } from "vitest";

describe("deviceUtil", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  describe("isTouchDevice", () => {
    it("should return true when pointer is coarse", async () => {
      const mockMatchMedia = vi.fn().mockReturnValue({ matches: true });
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: mockMatchMedia,
      });

      const { isTouchDevice } = await import("../deviceUtil");
      expect(isTouchDevice).toBe(true);
    });

    it("should return false when pointer is not coarse", async () => {
      const mockMatchMedia = vi.fn().mockReturnValue({ matches: false });
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: mockMatchMedia,
      });

      const { isTouchDevice } = await import("../deviceUtil");
      expect(isTouchDevice).toBe(false);
    });

    it("should return false in SSR environment", async () => {
      const originalWindow = global.window;
      // @ts-expect-error - Testing SSR
      delete global.window;

      const { isTouchDevice } = await import("../deviceUtil");
      expect(isTouchDevice).toBe(false);

      global.window = originalWindow;
    });

    it("should return false when matchMedia is not available", async () => {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: undefined,
      });

      const { isTouchDevice } = await import("../deviceUtil");
      expect(isTouchDevice).toBe(false);
    });
  });
});
