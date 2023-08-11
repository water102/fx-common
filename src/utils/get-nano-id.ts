import { nanoid } from "nanoid";

export const getNanoId = (length: number = 21): string => {
  return nanoid(length)
};
