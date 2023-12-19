export const toJson = <T>(res: { json: () => Promise<T> }) => res.json() as T;
