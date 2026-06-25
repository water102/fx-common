import { readEnvTruthy } from './read-env-truthy';
import { readPositiveIntEnv } from './read-positive-int-env';
import { readNonNegativeIntEnv } from './read-non-negative-int-env';

describe('readEnvTruthy', () => {
  const original = process.env.FX_TEST_TRUTHY;

  afterEach(() => {
    if (original === undefined) {
      delete process.env.FX_TEST_TRUTHY;
    } else {
      process.env.FX_TEST_TRUTHY = original;
    }
  });

  test('reads process.env via isEnvTruthy semantics', () => {
    process.env.FX_TEST_TRUTHY = 'yes';
    expect(readEnvTruthy('FX_TEST_TRUTHY')).toBe(true);
    process.env.FX_TEST_TRUTHY = '0';
    expect(readEnvTruthy('FX_TEST_TRUTHY')).toBe(false);
  });
});

describe('readPositiveIntEnv', () => {
  const original = process.env.FX_TEST_POS_INT;

  afterEach(() => {
    if (original === undefined) {
      delete process.env.FX_TEST_POS_INT;
    } else {
      process.env.FX_TEST_POS_INT = original;
    }
  });

  test('parses positive integers with fallback', () => {
    process.env.FX_TEST_POS_INT = '42';
    expect(readPositiveIntEnv('FX_TEST_POS_INT', 7)).toBe(42);
    process.env.FX_TEST_POS_INT = '-1';
    expect(readPositiveIntEnv('FX_TEST_POS_INT', 7)).toBe(7);
    delete process.env.FX_TEST_POS_INT;
    expect(readPositiveIntEnv('FX_TEST_POS_INT', 7)).toBe(7);
  });
});

describe('readNonNegativeIntEnv', () => {
  const original = process.env.FX_TEST_NON_NEG_INT;

  afterEach(() => {
    if (original === undefined) {
      delete process.env.FX_TEST_NON_NEG_INT;
    } else {
      process.env.FX_TEST_NON_NEG_INT = original;
    }
  });

  test('parses non-negative integers with fallback', () => {
    process.env.FX_TEST_NON_NEG_INT = '0';
    expect(readNonNegativeIntEnv('FX_TEST_NON_NEG_INT', 3)).toBe(0);
    process.env.FX_TEST_NON_NEG_INT = '12.9';
    expect(readNonNegativeIntEnv('FX_TEST_NON_NEG_INT', 3)).toBe(12);
    process.env.FX_TEST_NON_NEG_INT = 'bad';
    expect(readNonNegativeIntEnv('FX_TEST_NON_NEG_INT', 3)).toBe(3);
  });
});
