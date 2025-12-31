import { getGreeting } from './get-greeting';

describe('getGreeting', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('Returns morning greeting for morning hours', () => {
    jest.setSystemTime(new Date('2023-08-07T08:00:00'));
    expect(getGreeting()).toBe('Good morning!');
  });

  test('Returns afternoon greeting for afternoon hours', () => {
    jest.setSystemTime(new Date('2023-08-07T14:00:00'));
    expect(getGreeting()).toBe('Good afternoon!');
  });

  test('Returns evening greeting for evening hours', () => {
    jest.setSystemTime(new Date('2023-08-07T20:00:00'));
    expect(getGreeting()).toBe('Good evening!');
  });
});

