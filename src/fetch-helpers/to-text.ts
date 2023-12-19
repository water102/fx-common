export const toText = (res: { text: () => Promise<string> }) => res.text();
