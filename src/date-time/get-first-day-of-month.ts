export function getFirstDayOfMonth(date: Date): Date {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  return firstDay;
}