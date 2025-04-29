export const stringToNum = (f, ...arg) => {
  const argNum = arg.map((el) => parseFloat(el));
  return f(...argNum);
};
