export const isTouchDevice =
  typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(pointer: coarse)").matches
    : false;
