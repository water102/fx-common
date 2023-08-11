import { isNil } from 'ramda';
export const safeArray = (values) => isNil(values) ? [] : Array.isArray(values) ? values : [values];
