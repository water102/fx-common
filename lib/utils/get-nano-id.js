import { nanoid } from "nanoid";
export const getNanoId = (length = 21) => {
    return nanoid(length);
};
