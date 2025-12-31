/**
 * AES-GCM encryption/decryption run on Browser
 * -----------------------------------------------------------
 * - Algorithm: AES-256-GCM
 * - Key: SHA-256(secret)
 * - IV: 12 bytes random
 * - Output: base64(iv + tag + ciphertext)
 */
const IV_LENGTH = 12; // 96 bits for AES-GCM

async function getKey(secret: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const keyData = await crypto.subtle.digest("SHA-256", enc.encode(secret));
  return crypto.subtle.importKey("raw", keyData, "AES-GCM", false, [
    "encrypt",
    "decrypt",
  ]);
}

function encodeBase64(data: Uint8Array): string {
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
}

function decodeBase64(base64: string): Uint8Array {
  const binary = atob(base64.replace(/[\n\r\s]/g, ""));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export async function encrypt(text: string, secret: string): Promise<string> {
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
  const key = await getKey(secret);
  const encodedText = new TextEncoder().encode(text);

  const cipherBuffer = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encodedText);

  // Browser output = ciphertext + tag -> split the last 16 bytes as the tag
  const fullCipher = new Uint8Array(cipherBuffer);
  const tag = fullCipher.slice(fullCipher.length - 16);
  const ciphertext = fullCipher.slice(0, fullCipher.length - 16);

  // Node expects: iv + tag + ciphertext
  const combined = new Uint8Array(iv.length + tag.length + ciphertext.length);
  combined.set(iv, 0);
  combined.set(tag, iv.length);
  combined.set(ciphertext, iv.length + tag.length);

  return encodeBase64(combined);
}

export async function decrypt(base64: string, secret: string): Promise<string> {
  const combined = decodeBase64(base64);
  const iv = combined.slice(0, IV_LENGTH);
  const tag = combined.slice(IV_LENGTH, IV_LENGTH + 16);
  const ciphertext = combined.slice(IV_LENGTH + 16);

  const key = await getKey(secret);

  // Browser expects: ciphertext + tag
  const cipherWithTag = new Uint8Array(ciphertext.length + tag.length);
  cipherWithTag.set(ciphertext);
  cipherWithTag.set(tag, ciphertext.length);

  const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, cipherWithTag);
  return new TextDecoder().decode(decrypted);
}