import { isFunction } from "./is-function";

export const isAsync = (func: (...params: unknown[]) => unknown) => isFunction(func) && func.constructor.name === "AsyncFunction";
