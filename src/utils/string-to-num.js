export const stringToNum = (f, ...arg) => {
  const argNum = arg.map((el) => parseFloat(el));
  const result = f(...argNum);
  return result.toString();
};
