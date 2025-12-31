import { encrypt, decrypt } from './aes';

describe('encrypt and decrypt', () => {
  const secret = 'test-secret-key-12345';
  const testText = 'Hello, World!';

  test('Encrypts and decrypts text correctly', async () => {
    const encrypted = await encrypt(testText, secret);
    expect(encrypted).toBeDefined();
    expect(typeof encrypted).toBe('string');
    expect(encrypted.length).toBeGreaterThan(0);

    const decrypted = await decrypt(encrypted, secret);
    expect(decrypted).toBe(testText);
  });

  test('Encrypts different texts to different outputs', async () => {
    const text1 = 'Hello';
    const text2 = 'World';

    const encrypted1 = await encrypt(text1, secret);
    const encrypted2 = await encrypt(text2, secret);

    expect(encrypted1).not.toBe(encrypted2);
  });

  test('Decrypt fails with wrong secret', async () => {
    const encrypted = await encrypt(testText, secret);
    
    await expect(decrypt(encrypted, 'wrong-secret')).rejects.toThrow();
  });

  test('Handles empty string', async () => {
    const encrypted = await encrypt('', secret);
    const decrypted = await decrypt(encrypted, secret);
    expect(decrypted).toBe('');
  });

  test('Handles special characters', async () => {
    const specialText = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const encrypted = await encrypt(specialText, secret);
    const decrypted = await decrypt(encrypted, secret);
    expect(decrypted).toBe(specialText);
  });
});

