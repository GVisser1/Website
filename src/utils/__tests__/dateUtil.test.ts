import { describe, expect, test, vi } from "vite-plus/test";
import { getAge, getMonthName, getTimeFrame } from "../dateUtil";

describe("getMonthName", () => {
  test.each([
    [0, "Jan"],
    [1, "Feb"],
    [2, "Mar"],
    [3, "Apr"],
    [4, "May"],
    [5, "Jun"],
    [6, "Jul"],
    [7, "Aug"],
    [8, "Sep"],
    [9, "Oct"],
    [10, "Nov"],
    [11, "Dec"],
  ])("getMonthName(2000, %i, 21) should return %s", (index, expected) => {
    const date = new Date(2000, index, 21); // Any day in the month
    expect(getMonthName(date)).toBe(expected);
  });
});

describe("getTimeFrame", () => {
  test("should return the correct time frame when endDate is provided", () => {
    const startDate = new Date(2022, 0, 1);
    const endDate = new Date(2022, 11, 31);
    const expectedTimeFrame = "Jan 2022 - Dec 2022";

    const timeFrame = getTimeFrame(startDate, endDate);

    expect(timeFrame).toBe(expectedTimeFrame);
  });

  test("should return the correct time frame when endDate is not provided", () => {
    const startDate = new Date(2022, 0, 1);
    const expectedTimeFrame = "Jan 2022 - Present";

    const timeFrame = getTimeFrame(startDate);

    expect(timeFrame).toBe(expectedTimeFrame);
  });
});

describe("getAge", () => {
  test.each([
    [new Date(2024, 3, 20), 23],
    [new Date(2024, 3, 21), 24],
    [new Date(2024, 3, 22), 24],
    [new Date(2024, 0, 1), 23],
    [new Date(2024, 11, 31), 24],
  ])("getAge(%s) should return %i", (today, expected) => {
    expect(getAge(today)).toBe(expected);
  });

  test("should default to today", () => {
    vi.setSystemTime(new Date(2024, 3, 22));
    const age = getAge();

    expect(age).toBe(24);

    vi.useRealTimers();
  });
});
