import { isFunction } from "./is-function";
export const isAsync = (func) => isFunction(func) && func.constructor.name === "AsyncFunction";
