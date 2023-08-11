import dayjs from "dayjs";

export const toDayjs = (time: Date | string | null | undefined) =>
  dayjs(time);

export const toUtcDayjs = (time: Date | string | null | undefined) =>
  dayjs(time).add(new Date().getTimezoneOffset(), 'minute');

export const toUtc = (time: Date | string | null | undefined) =>
  toUtcDayjs(time).toDate();