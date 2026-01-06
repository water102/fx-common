/**
 * Adds a specified number of days to a date.
 * @param date - The date to add days to
 * @param days - Number of days to add (can be negative to subtract)
 * @returns A new Date object with the days added
 * @example
 * const tomorrow = addDaysToDate(new Date(), 1);
 * const yesterday = addDaysToDate(new Date(), -1);
 */
export declare function addDaysToDate(date: Date, days: number): Date;
