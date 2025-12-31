import { cloneDataObject } from './clone-data-object';

describe('cloneDataObject', () => {
  test('Deep clones an object', () => {
    const original = { a: 1, b: { c: 2 } };
    const cloned = cloneDataObject(original);
    
    cloned.b.c = 3;
    expect(original.b.c).toBe(2);
  });

  test('Clones arrays', () => {
    const original: (number | { a: number })[] = [1, 2, { a: 3 }];
    const cloned = cloneDataObject(original);
    
    (cloned[2] as { a: number }).a = 4;
    expect((original[2] as { a: number }).a).toBe(3);
  });

  test('Throws error for circular references', () => {
    const obj: any = { a: 1 };
    obj.self = obj;
    
    expect(() => cloneDataObject(obj)).toThrow();
  });
});

