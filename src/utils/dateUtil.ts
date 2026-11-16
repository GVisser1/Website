// A fixed locale, so the prerendered page and every visitor's browser show the same month names
const DATE_LOCALE = "en-US";

export const getMonthName = (date: Date): string => date.toLocaleString(DATE_LOCALE, { month: "short" });

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
