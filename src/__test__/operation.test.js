import { operations } from '../operations/operations';

describe('test sum function', () => {
  test('sum function adds 1 + 2 to equal 3', () => {
    expect(operations.sum(1, 2)).toBe(3);
  });
  test('sum function adds 0 + 99 to equal 99', () => {
    expect(operations.sum(0, 99)).toBe(99);
  });
});

describe('test subtraction function', () => {
  test('subtraction 5 - 5 to equal 0', () => {
    expect(operations.subtraction(5, 5)).toBe(0);
  });
  test('subtraction 25 - 5 to equal 20', () => {
    expect(operations.subtraction(25, 5)).toBe(20);
  });
});

describe('test multiple function', () => {
  test('multiple 5 * 5 to equal 25', () => {
    expect(operations.multiple(5, 5)).toBe(25);
  });
  test('multiple 6 * 6 to equal 36', () => {
    expect(operations.multiple(6, 6)).toBe(36);
  });
});

describe('test division function', () => {
  test('division 5 / 5 to equal 1', () => {
    expect(operations.division(5, 5)).toBe(1);
  });
  test('division 9 / 3 to equal 3', () => {
    expect(operations.division(9, 3)).toBe(3);
  });
  test('division 9 / 0 to equal Error', () => {
    expect(() => operations.division(9, 0)).toThrow('Division by zero');
  });
});

describe('test percent function', () => {
  test('percent 10 to equal 0.1', () => {
    expect(operations.percent(10)).toBe(0.1);
  });
  test('percent 99 to equal 0.99', () => {
    expect(operations.percent(99)).toBe(0.99);
  });
});

describe('test square function', () => {
  test('square 5 to equal 25', () => {
    expect(operations.square(5)).toBe(25);
  });
  test('square 10 to equal 100', () => {
    expect(operations.square(10)).toBe(100);
  });
});

describe('test cube function', () => {
  test('cube 5 to equal 125', () => {
    expect(operations.cube(5)).toBe(125);
  });
  test('cube 10 to equal 1000', () => {
    expect(operations.cube(10)).toBe(1000);
  });
});

describe('test power function', () => {
  test('power 5 by 2 to equal 25', () => {
    expect(operations.power(5, 2)).toBe(25);
  });
  test('power 10 by 3 to equal 1000', () => {
    expect(operations.power(10, 3)).toBe(1000);
  });
});

describe('test ratio function', () => {
  test('ratio 1 to equal 1', () => {
    expect(operations.ratio(1)).toBe(1);
  });
  test('ratio 5 to equal 0.2', () => {
    expect(operations.ratio(5)).toBe(0.2);
  });
  test('ratio 0 to throw Error', () => {
    expect(() => operations.ratio(0)).toThrow('Division by zero');
  });
});

describe('test factorial function', () => {
  test('factorial 3 to equal 6', () => {
    expect(operations.factorial(3)).toBe(6);
  });
  test('factorial 10 to equal 3 628 800', () => {
    expect(operations.factorial(10)).toBe(3628800);
  });
  test('factorial -5 to equal 0', () => {
    expect(operations.factorial(0)).toBe(0);
  });
});
