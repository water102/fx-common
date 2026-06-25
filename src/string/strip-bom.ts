/** Remove UTF-8 BOM (U+FEFF) when present at the start of a string. */
export const stripBom = (text: string): string =>
  text.length > 0 && text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
