import { isValidEmail } from "./is-valid-email";

describe('isValidEmail function', () => {
  test('should return true for valid email addresses', () => {
    const validEmails = [
      'test@example.com',
      'john.doe@example.co.uk',
      'user-123@example.net',
      'name.lastname@example.org',
    ];

    validEmails.forEach((email) => {
      const result = isValidEmail(email);
      expect(result).toBe(true);
    });
  });

  test('should return false for invalid email addresses', () => {
    const invalidEmails = [
      'invalid.email.com',
      'name@.com',
      'name@domain.',
      '@example.com',
      'name@-example.com',
      'name@example..com',
    ];

    invalidEmails.forEach((email) => {
      const result = isValidEmail(email);
      expect(result).toBe(false);
    });
  });

  test('should return false for an empty string', () => {
    const emptyString = '';
    const result = isValidEmail(emptyString);
    expect(result).toBe(false);
  });

  test('should return false for a non-string value', () => {
    const nonStringValue = 12345;
    const result = isValidEmail(nonStringValue as any);
    expect(result).toBe(false);
  });
});