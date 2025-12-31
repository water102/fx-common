export const safeCast = <T>(
  value: unknown,
  guard: (value: unknown) => value is T,
  defaultValue: T
): T => {
  return guard(value) ? value : defaultValue;
};

