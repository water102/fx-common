export const getAllMethodNames = (obj) => {
    return Object.getOwnPropertyNames(obj).filter((property) => typeof obj[property] === "function");
};
