import { __, apply, isNotNil } from 'ramda';

export const applyPropertyDecorators =
  (target: any, propertyName: string) =>
    (...propertyDecorators: PropertyDecorator[]) => {
      const applyParams = apply(__, [
        target,
        propertyName,
      ]) as (propertyDecorator: PropertyDecorator) => void;
      propertyDecorators
        .filter(isNotNil)
        .forEach(applyParams);
    };