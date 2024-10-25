import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "usehooks-ts";
import type { Mock } from "vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Font } from "../../types";
import { useFont } from "../useFont";

// Mocking the useLocalStorage hook
vi.mock("usehooks-ts", () => ({
  useLocalStorage: vi.fn(),
}));

describe("useFont hook", () => {
  const setFontMock = vi.fn();
  const useLocalStorageMock = useLocalStorage as Mock;

  beforeEach(() => {
    useLocalStorageMock.mockImplementation((_key: string, initialValue: Font) => [initialValue, setFontMock]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns the default font", () => {
    const { result } = renderHook(() => useFont());

    expect(result.current.font).toBe("inter");
  });

  it("changes the font", () => {
    const { result } = renderHook(() => useFont());

    act(() => result.current.handleFontChange("sans"));

    expect(setFontMock).toHaveBeenCalledWith("sans");
    expect(result.current.font).toBe("inter");

    useLocalStorageMock.mockImplementationOnce(() => ["sans", setFontMock]);

    const { result: updatedResult } = renderHook(() => useFont());

    expect(updatedResult.current.font).toBe("sans");
  });
});
