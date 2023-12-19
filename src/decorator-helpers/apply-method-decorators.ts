import { __, apply, isNotNil } from 'ramda';
import { AnyFunction } from '../type/any-function';
import { getMethodNameOfObject } from '../utils/oop/get-method-name-of-object';
import { isNilOrEmpty } from '../validate';

export const applyMethodDecorators =
  (target: any, method: AnyFunction) =>
    (...methodDecorators: MethodDecorator[]) => {
      const methodName = getMethodNameOfObject(target, method);
      if (isNilOrEmpty(methodName)) return;
      const applyParams = apply(__, [
        target,
        methodName,
        {
          value: target[methodName as string],
          writable: true,
          enumerable: true,
          configurable: true,
        },
      ]) as (methodDecorator: MethodDecorator) => void;
      methodDecorators
        .filter(isNotNil)
        .forEach(applyParams);
    };