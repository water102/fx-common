import { isEnvTruthy } from './is-env-truthy';

describe('isEnvTruthy', () => {
  test('truthy strings', () => {
    expect(isEnvTruthy('1')).toBe(true);
    expect(isEnvTruthy('true')).toBe(true);
    expect(isEnvTruthy('TRUE')).toBe(true);
    expect(isEnvTruthy('yes')).toBe(true);
    expect(isEnvTruthy('on')).toBe(true);
    expect(isEnvTruthy('  On  ')).toBe(true);
  });

  test('falsy values', () => {
    expect(isEnvTruthy(null)).toBe(false);
    expect(isEnvTruthy(undefined)).toBe(false);
    expect(isEnvTruthy('')).toBe(false);
    expect(isEnvTruthy('   ')).toBe(false);
    expect(isEnvTruthy('0')).toBe(false);
    expect(isEnvTruthy('false')).toBe(false);
    expect(isEnvTruthy('no')).toBe(false);
    expect(isEnvTruthy('off')).toBe(false);
  });
});
