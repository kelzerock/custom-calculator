const E = 2.718281828459045;

export const operations = {
  sum: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiple: (a, b) => a * b,
  division: (a, b) => a / b,
  percent: (a) => a / 100,
  square: (a) => a ** 2,
  cube: (a) => a ** 3,
  power: (a, b) => a ** b,
  sqrt: (a) => a ** (1 / 2),
  cbrt: (a) => a ** (1 / 3),
  nthRoot: (a, b) => a ** (1 / b),
  exp: (a) => E ** a,
  power10: (a) => 10 ** a,
  ratio: (a) => 1 / a,
  PI: () => Math.PI,
  E: () => Math.E,
  factorial: (a) => {
    if (a >= 1) {
      let counter = a;
      let result = 1;
      while (counter > 1) {
        result *= counter;
        counter -= 1;
      }
      return result;
    }
    return 0;
  },
};
