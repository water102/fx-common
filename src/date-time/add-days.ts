import { addHours } from "./add-hours";

export function addDaysToDate(date: Date, days: number) {
  return addHours(date, days * 24)
}