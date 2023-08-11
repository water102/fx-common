export const toText = <T>(res: {
  text: () => Promise<T>,
  [key: string]: any
}) => res.text();