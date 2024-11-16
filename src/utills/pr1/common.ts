export const formatNumberWithCommas = (number: number | null) => {
  if (!number) return null;

  return number.toLocaleString() + "원";
};
