export const getProgess = (value: number): number => {
  if (value < 0) return 0;
  if (value > 100) return 100;
  return value;
};
