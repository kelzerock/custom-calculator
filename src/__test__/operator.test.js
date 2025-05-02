import { operations } from '../operations/operations';
import { Operator } from '../operator/operator';

describe('Operator', () => {
  let operator;

  beforeEach(() => {
    operator = new Operator();
  });

  test('setNum update currentInput и resultForView', () => {
    operator.setNum('5');
    operator.setNum('6');
    operator.setNum('0');
    expect(operator.currentInput).toBe('560');
    expect(operator.resultForView).toBe('560');
  });

  test('setPoint add point to the number', () => {
    operator.setPoint();
    expect(operator.currentInput).toBe('0.');
    expect(operator.resultForView).toBe('0.');

    operator.currentInput = '123';
    operator.setPoint();
    expect(operator.currentInput).toBe('123.');

    operator.currentInput = '123.3';
    operator.setPoint();
    expect(operator.currentInput).toBe('123.3');
  });

  test('resetAC reset all data', () => {
    operator.currentInput = '100';
    operator.memoryOperand = '50';
    operator.resultForView = '150';
    operator.firstOperand = '10';
    operator.secondOperand = '5';
    operator.operation = operations.sum;
    operator.activeResult = false;

    operator.resetAC();

    expect(operator.currentInput).toBe(null);
    expect(operator.memoryOperand).toBe(null);
    expect(operator.resultForView).toBe(null);
    expect(operator.firstOperand).toBe(null);
    expect(operator.secondOperand).toBe(null);
    expect(operator.operation).toBe(null);
    expect(operator.activeResult).toBe(false);
  });

  test('revertSign revert sign in firstOperand when activeResult true', () => {
    operator.activeResult = true;
    operator.firstOperand = '-123';

    operator.revertSign();

    expect(operator.firstOperand).toBe('123');
    expect(operator.resultForView).toBe('123');
  });

  test('revertSign revert sign in currentInput when activeResult false', () => {
    operator.activeResult = false;
    operator.currentInput = '456';

    operator.revertSign();

    expect(operator.currentInput).toBe('-456');
    expect(operator.resultForView).toBe('-456');
  });

  test('check sum operation', () => {
    operator.setNum('5');
    operator.sum();
    operator.setNum('7');
    operator.equal();
    const result = '12';
    expect(operator.firstOperand).toBe(result);
    expect(operator.currentInput).toBe(null);
    expect(operator.activeResult).toBe(true);
    expect(operator.resultForView).toBe(result);
  });

  test('check subtraction operation', () => {
    operator.setNum('5');
    operator.subtraction();
    operator.setNum('7');
    operator.subtraction();
    operator.setNum('10');
    operator.equal();
    const result = '-12';
    expect(operator.firstOperand).toBe(result);
    expect(operator.currentInput).toBe(null);
    expect(operator.activeResult).toBe(true);
    expect(operator.resultForView).toBe(result);
  });

  test('check multiple operation', () => {
    operator.setNum('5');
    operator.multiple();
    operator.setNum('-7');
    operator.equal();
    const result = '-35';
    expect(operator.firstOperand).toBe(result);
    expect(operator.currentInput).toBe(null);
    expect(operator.activeResult).toBe(true);
    expect(operator.resultForView).toBe(result);
  });

  test('check division operation', () => {
    operator.setNum('5');
    operator.division();
    operator.setNum('5');
    operator.equal();
    const result = '1';
    expect(operator.firstOperand).toBe(result);
    expect(operator.currentInput).toBe(null);
    expect(operator.activeResult).toBe(true);
    expect(operator.resultForView).toBe(result);
  });

  test('check division operation by zero', () => {
    operator.setNum('5');
    operator.division();
    operator.setNum('0');
    operator.equal();
    const result = 'ERROR';
    expect(operator.firstOperand).toBe(null);
    expect(operator.currentInput).toBe(null);
    expect(operator.activeResult).toBe(false);
    expect(operator.resultForView).toBe(result);
  });

  test('check percent operation', () => {
    operator.setNum('5');
    operator.percent();
    const result = '0.05';
    expect(operator.currentInput).toBe(result);
    expect(operator.currentInput).toBe(null);
    expect(operator.activeResult).toBe(false);
    expect(operator.resultForView).toBe(result);
  });
});
