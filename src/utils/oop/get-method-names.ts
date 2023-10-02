export function getMethodNames(obj: any, methodNames: string[] = [], excludeBaseClass = 'Object'): string[] {
  if (!obj) return []; // recursive approach
  if (Object.getPrototypeOf(obj)?.constructor?.name === excludeBaseClass) return [];

  return [
    ...new Set(
      methodNames
        .concat(Object.getOwnPropertyNames(obj))
        .concat(
          getMethodNames(Object.getPrototypeOf(obj), methodNames)
        )
        .filter((key) => key !== 'constructor' && typeof obj[key] === 'function')
    )
  ]
}
