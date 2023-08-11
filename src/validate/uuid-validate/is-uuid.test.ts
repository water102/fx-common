import { isUuId } from './is-uuid'

describe('isUuId function', () => {
  test('should return true for valid UUID', () => {
    const validUUID = '550e8400-e29b-41d4-a716-446655440000';
    const result = isUuId(validUUID);
    expect(result).toBe(true);
  });

  test('should return false for invalid UUID with lowercase letters', () => {
    const invalidUUID = '550e8400-e29b-41d4-a716-44665544000g';
    const result = isUuId(invalidUUID);
    expect(result).toBe(false);
  });

  test('should return false for invalid UUID with uppercase letters', () => {
    const invalidUUID = '550e8400-e29b-41d4-a716-44665544000G';
    const result = isUuId(invalidUUID);
    expect(result).toBe(false);
  });

  test('should return false for invalid UUID with wrong format', () => {
    const invalidUUID = '550e8400e29b41d4a716446655440000';
    const result = isUuId(invalidUUID);
    expect(result).toBe(false);
  });

  test('should return false for an empty string', () => {
    const emptyString = '';
    const result = isUuId(emptyString);
    expect(result).toBe(false);
  });

  test('should return false for a non-string value', () => {
    const nonStringValue = 12345;
    const result = isUuId(nonStringValue as any);
    expect(result).toBe(false);
  });
});