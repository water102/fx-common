import { getAllMethodNames } from "./get-all-method-names";
export const getAllPrototypeMethodNames = (obj) => {
    return getAllMethodNames(Object.getPrototypeOf(obj)).filter((property) => property !== "constructor");
};
