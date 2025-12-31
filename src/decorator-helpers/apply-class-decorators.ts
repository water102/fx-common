export const ApplyClassDecorators = (...classDecorators: ClassDecorator[]) => <T extends new (...args: any[]) => unknown>(constructor: T) => {
  classDecorators.forEach(classDecorator => classDecorator(constructor));
};
