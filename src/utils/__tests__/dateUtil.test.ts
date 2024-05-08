import { describe, expect, test } from "vitest";
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
  test("should return the correct age based on the hardcoded date of birth", () => {
    const currentDate = new Date();
    const dob = new Date(2000, 3, 21);
    const expectedAge = currentDate.getFullYear() - dob.getFullYear();

    const age = getAge();

    expect(age).toBe(expectedAge);
  });
});
