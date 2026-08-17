export const getMonthName = (date: Date): string => date.toLocaleString("default", { month: "short" });

export const getTimeFrame = (startDate: Date, endDate?: Date): string => {
  const start = `${getMonthName(startDate)} ${startDate.getFullYear()}`;
  const end = endDate ? `${getMonthName(endDate)} ${endDate.getFullYear()}` : "Present";

  return `${start} - ${end}`;
};

export const getAge = (): number => {
  const dob = new Date(2000, 3, 21);
  const diff = Date.now() - dob.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
