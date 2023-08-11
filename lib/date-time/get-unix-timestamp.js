import { getTimestamp } from "./get-timestamp";
export function getUnixTimestamp(date) {
    return getTimestamp(date) / 1000 | 0;
}
