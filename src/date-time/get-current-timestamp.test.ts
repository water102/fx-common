import { getCurTimestamp } from './get-current-timestamp';

describe('getCurTimestamp', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('Returns current timestamp in seconds', () => {
    const mockDate = new Date('2023-08-07T12:00:00Z');
    jest.setSystemTime(mockDate);

    const result = getCurTimestamp();
    const expected = Math.floor(mockDate.getTime() / 1000);

    expect(result).toBe(expected);
  });

  test('Returns integer value', () => {
    const result = getCurTimestamp();
    expect(Number.isInteger(result)).toBe(true);
  });

  test('Returns timestamp in seconds (not milliseconds)', () => {
    const mockDate = new Date('2023-08-07T12:00:00Z');
    jest.setSystemTime(mockDate);

    const result = getCurTimestamp();
    const milliseconds = mockDate.getTime();
    const seconds = Math.floor(milliseconds / 1000);

    expect(result).toBe(seconds);
    expect(result).toBeLessThan(milliseconds);
  });
});

