// A fixed locale, so the prerendered page and every visitor's browser show the same month names
const DATE_LOCALE = "en-US";

export const getMonthName = (date: Date): string => date.toLocaleString(DATE_LOCALE, { month: "short" });

export const getTimeFrame = (startDate: Date, endDate?: Date): string => {
  const start = `${getMonthName(startDate)} ${startDate.getFullYear()}`;
  const end = endDate ? `${getMonthName(endDate)} ${endDate.getFullYear()}` : "Present";

  return `${start} - ${end}`;
};

const DATE_OF_BIRTH = new Date(2000, 3, 21);

export const getAge = (today = new Date()): number => {
  const hadBirthdayThisYear =
    today.getMonth() > DATE_OF_BIRTH.getMonth() ||
    (today.getMonth() === DATE_OF_BIRTH.getMonth() && today.getDate() >= DATE_OF_BIRTH.getDate());
  return today.getFullYear() - DATE_OF_BIRTH.getFullYear() - (hadBirthdayThisYear ? 0 : 1);
};
