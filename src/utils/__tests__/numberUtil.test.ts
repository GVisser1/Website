import { describe, expect, test } from "vitest";
import { isEven } from "../numberUtil";

describe("isEven", () => {
  test.each([
    [2, true],
    [3, false],
    [0, true],
    [1.5, false],
  ])("isEven(%i) should return %s", (num, expected) => {
    const result = isEven(num);
    expect(result).toBe(expected);
  });
});
