export function getDateFromTimestamp(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000);
  return date;
}
