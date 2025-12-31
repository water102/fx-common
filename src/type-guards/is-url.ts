export const isUrl = (url: string) => {
  try {
    new URL(url);
  } catch (error) {
    return false;
  }
  return true;
};
