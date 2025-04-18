import { describe, expect, test } from "vitest";
import { normalizeString } from "../textUtil";

describe("normalizeString", () => {
  test("converts string to lowercase", () => {
    const input = "Hello World";
    const expected = "hello world";
    expect(normalizeString(input)).toBe(expected);
  });

  test("removes diacritics", () => {
    const input = "Café Éléphant";
    const expected = "cafe elephant";
    expect(normalizeString(input)).toBe(expected);
  });

  test("handles empty strings", () => {
    const input = "";
    const expected = "";
    expect(normalizeString(input)).toBe(expected);
  });

  test("handles strings with special characters", () => {
    const input = "¡Hola! ¿Qué tal?";
    const expected = "¡hola! ¿que tal?";
    expect(normalizeString(input)).toBe(expected);
  });

  test("handles strings with numbers", () => {
    const input = "123 Café 456";
    const expected = "123 cafe 456";
    expect(normalizeString(input)).toBe(expected);
  });
});
