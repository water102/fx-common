export const getNanoId = async (length: number = 21): Promise<string> => {
  const { nanoid } = await import('nanoid');
  return nanoid(length);
};
