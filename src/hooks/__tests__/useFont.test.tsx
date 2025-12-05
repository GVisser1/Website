import { act, renderHook } from "@testing-library/react";
import { useLocalStorage } from "usehooks-ts";
import type { Mock } from "vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Font } from "../useFont";
import { useFont } from "../useFont";

// Mocking the useLocalStorage hook
vi.mock("usehooks-ts", () => ({
  useLocalStorage: vi.fn(),
}));

describe("useFont hook", () => {
  const setFontMock = vi.fn();
  const useLocalStorageMock = useLocalStorage as Mock;

  beforeEach(() => {
    useLocalStorageMock.mockImplementation((_key: string, initialValue: Font) => [
      initialValue,
      setFontMock,
    ]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns the default font", () => {
    const { result } = renderHook(() => useFont());

    expect(result.current.font).toBe("Inter");
  });

  it("changes the font", () => {
    const { result } = renderHook(() => useFont());

    act(() => result.current.handleFontChange("Sans"));

    expect(setFontMock).toHaveBeenCalledWith("Sans");
    expect(result.current.font).toBe("Inter");

    useLocalStorageMock.mockImplementationOnce(() => ["Sans", setFontMock]);

    const { result: updatedResult } = renderHook(() => useFont());

    expect(updatedResult.current.font).toBe("Sans");
  });
});
