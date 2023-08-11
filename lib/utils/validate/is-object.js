import { isNil } from 'ramda';
export const isObject = (value) => !isNil(value) && typeof value === 'object';
