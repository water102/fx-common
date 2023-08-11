export const toJson = <T>(res: {
  json: () => Promise<T>,
  [key: string]: any
}) => res.json();