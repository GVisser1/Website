export const isEven = (num: number): boolean => num % 2 === 0;

export const getAge = (dob: Date): number => {
  const diff = Date.now() - dob.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
