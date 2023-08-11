import dayjs from "dayjs";
export const toDayjs = (time) => dayjs(time);
export const toUtcDayjs = (time) => dayjs(time).add(new Date().getTimezoneOffset(), 'minute');
export const toUtc = (time) => toUtcDayjs(time).toDate();
