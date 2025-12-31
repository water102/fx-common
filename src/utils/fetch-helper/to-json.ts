export const toJson = <T = any>(res: {
  json: () => Promise<T>;
  [key: string]: any;
}) => res.json();
