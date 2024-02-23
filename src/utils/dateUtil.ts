const getMonthName = (date: Date): string => date.toLocaleString("default", { month: "short" });

export const getTimeFrame = (startDate: Date, endDate?: Date): string => {
  const start = `${getMonthName(startDate)}. ${startDate.getFullYear()}`;
  const end = endDate ? `${getMonthName(endDate)}. ${endDate.getFullYear()}` : "Present";

  return `${start} - ${end}`;
};
