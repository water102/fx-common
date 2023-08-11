export function getDateFromTimestamp(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date;
}
