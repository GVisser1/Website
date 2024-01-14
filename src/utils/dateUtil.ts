const getMonthName = (monthIndex: number, compact = true) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthAbbreviations = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];

  const index = monthIndex % 12;
  return compact ? monthAbbreviations[index] : monthNames[index];
};

export const getTimeFrame = (startDate: Date, endDate?: Date) => {
  const start = `${getMonthName(startDate.getMonth())} ${startDate.getFullYear()}`;
  const end = endDate ? `${getMonthName(endDate.getMonth())} ${endDate.getFullYear()}` : "Present";
  return `${start} - ${end}`;
};
