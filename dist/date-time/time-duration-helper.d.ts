type TimeDuration = {
    years: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
export declare const unixTimestampToTimeDuration: (unixTimestamp: number) => TimeDuration;
export declare const timeDurationBetweenTwoDates: (date1: Date, date2: Date) => TimeDuration;
export {};
