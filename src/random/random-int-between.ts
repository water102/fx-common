export const randomIntBetween = (min: number, max: number): number => {
  if (max < min) {
    const tmpNo = min;
    min = max;
    max = tmpNo;
  }
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt) + minInt);
};
