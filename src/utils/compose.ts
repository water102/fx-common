import { AnyFunction } from "../type";

export const compose = (...functions: AnyFunction[]) => (args: any[]) => functions.reduceRight((arg, fn) => fn(arg), args);