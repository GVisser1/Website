export const isEven = (num: number): boolean => num % 2 === 0;

export const getAge = (): number => {
  const dob = new Date(2000, 3, 21);
  const diff = Date.now() - dob.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
