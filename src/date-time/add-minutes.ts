export const addMinutes = (dt: Date, minutes: number) => {
  return !!dt && dt instanceof Date
    ? new Date(dt.getTime() + minutes * 60_000)
    : new Date();
};
