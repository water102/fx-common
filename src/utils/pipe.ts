import { AnyFunction } from "../type";

export const pipe = (...functions: AnyFunction[]) => (args: any[]) => functions.reduce((arg, fn) => fn(arg), args);