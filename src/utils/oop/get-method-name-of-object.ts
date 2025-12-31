import { AnyFunction } from '../..';
import { getMethodNames } from './get-method-names';

export const getMethodNameOfObject = (target: any, method: AnyFunction) => {
  return getMethodNames(target).find((prop) => target[prop] === method);
};
