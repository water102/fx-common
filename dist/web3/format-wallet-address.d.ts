/**
 * Formats a wallet address by showing only the first and last few characters.
 * @param addr - The wallet address to format
 * @param head - Number of characters to show at the start (default: 6)
 * @param tail - Number of characters to show at the end (default: 4)
 * @returns Formatted address string (e.g., '0x1234...5678')
 * @example
 * formatWalletAddress('0x1234567890abcdef1234567890abcdef12345678', 6, 4);
 * // '0x1234...5678'
 */
export declare const formatWalletAddress: (addr: string, head?: number, tail?: number) => string;
