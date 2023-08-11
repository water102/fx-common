import { addHours } from "./add-hours";
export function addDaysToDate(date, days) {
    return addHours(date, days * 24);
}
