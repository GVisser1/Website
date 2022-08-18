export const isEven = (num: number) => num % 2 === 0;

export const getAge = (dob: Date) =>
  Math.abs(new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970);
