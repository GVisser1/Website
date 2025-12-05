import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useMetaKey from "../useMetaKey";

describe("useMetaKey", () => {
  it("returns '⌘' on Mac systems", () => {
    Object.defineProperty(navigator, "userAgent", {
      value:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      configurable: true,
    });

    const { result } = renderHook(() => useMetaKey());
    expect(result.current).toBe("⌘");
  });

  it("returns 'Ctrl' on non-Mac systems", () => {
    Object.defineProperty(navigator, "userAgent", {
      value:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      configurable: true,
    });

    const { result } = renderHook(() => useMetaKey());
    expect(result.current).toBe("Ctrl");
  });
});
