type TimeDuration = {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const unixTimestampToTimeDuration = (
  unixTimestamp: number
): TimeDuration => {
  // Convert milliseconds to seconds, minutes, hours, days, and years
  const seconds = Math.floor(unixTimestamp / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  // Calculate the remaining days, hours, minutes, and seconds
  const remainingDays = days % 365;
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  // Create the result object
  const result = {
    years,
    days: remainingDays,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds
  };

  return result;
};

export const timeDurationBetweenTwoDates = (
  date1: Date,
  date2: Date
): TimeDuration => {
  // Calculate the time difference in milliseconds
  const diff = Math.abs(date1.getTime() - date2.getTime());
  return unixTimestampToTimeDuration(diff);
};
