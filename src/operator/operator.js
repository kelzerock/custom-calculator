import { operations } from '../operations/operations';
import { stringToNum } from '../utils/string-to-num';

export class Operator {
  activeResult = false;

  currentInput = null;

  firstOperand = null;

  memoryOperand = null;

  operation = null;

  operationComplete = false;

  resultForView = null;

  secondOperand = null;

  readyToOperationWithTwoOperand = false;

  updateViewFromCurrentInput() {
    this.resultForView = this.currentInput;
  }

  updateViewFromFirstOperand() {
    this.resultForView = this.firstOperand;
  }

  resetAC() {
    this.resultForView = null;
    this.memoryOperand = null;
    this.reset();
  }

  reset() {
    this.currentInput = null;
    this.firstOperand = null;
    this.secondOperand = null;
    this.operation = null;
    this.activeResult = false;
  }

  revertSign() {
    if (this.activeResult) {
      const value = this.firstOperand;
      if (value) {
        if (value[0] === '-') {
          this.firstOperand = value.slice(1);
        } else {
          this.firstOperand = `-${value}`;
        }
        this.updateViewFromFirstOperand();
      }
    } else {
      const value = this.currentInput;
      if (value) {
        if (value[0] === '-') {
          this.currentInput = value.slice(1);
        } else {
          this.currentInput = `-${value}`;
        }
        this.updateViewFromCurrentInput();
      }
    }
  }

  setNum(value) {
    if (this.currentInput && this.currentInput !== '0') {
      this.currentInput += value;
    } else {
      this.currentInput = value;
    }
    this.activeResult = false;
    if (this.operationComplete) {
      this.operationComplete = false;
      this.operation = null;
      this.firstOperand = null;
    }
    if (this.firstOperand) {
      this.readyToOperationWithTwoOperand = true;
    }
    this.updateViewFromCurrentInput();
  }

  setPoint() {
    if (this.currentInput) {
      if (!this.currentInput.includes('.')) {
        this.currentInput += '.';
      }
    } else {
      this.currentInput = '0.';
    }
    this.activeResult = false;
    if (this.operationComplete) {
      this.operationComplete = false;
      this.operation = null;
      this.firstOperand = null;
    }
    if (this.firstOperand) {
      this.readyToOperationWithTwoOperand = true;
    }
    this.updateViewFromCurrentInput();
  }

  executeCurrentOperation() {
    if (!this.firstOperand || !(this.currentInput || this.secondOperand))
      return;
    this.secondOperand = this.currentInput || this.secondOperand;

    if (
      this.operation === operations.division &&
      parseFloat(this.secondOperand) === 0
    ) {
      this.resultForView = 'ERROR';
      this.reset();
    } else {
      const result = stringToNum(
        this.operation,
        this.firstOperand,
        this.secondOperand
      );
      this.firstOperand = result;
      this.currentInput = null;
      this.activeResult = true;
      this.updateViewFromFirstOperand();
    }
  }

  memoryClean() {
    this.memoryOperand = null;
  }

  memoryCall() {
    this.secondOperand = this.currentInput || this.firstOperand;
    if (this.memoryOperand) {
      this.firstOperand = this.memoryOperand;
    } else {
      this.firstOperand = '0';
    }
    this.currentInput = null;
    this.activeResult = true;
    this.operationComplete = true;
    this.updateViewFromFirstOperand();
  }

  memorySum() {
    this.memoryOperand = stringToNum(
      operations.sum,
      this.memoryOperand || '0',
      this.resultForView
    );
    this.firstOperand = this.currentInput || this.resultForView;
    this.currentInput = '';
    this.operation = null;
  }

  memorySubtraction() {
    this.memoryOperand = stringToNum(
      operations.subtraction,
      this.memoryOperand || '0',
      this.resultForView
    );
    this.firstOperand = this.currentInput || this.resultForView;
    this.currentInput = '';
    this.operation = null;
  }

  operationWithoutOperand(operation) {
    const result = stringToNum(operation);
    this.firstOperand = result;
    this.currentInput = null;
    this.activeResult = true;
    this.operationComplete = true;
    this.updateViewFromFirstOperand();
  }

  operationWithSingleOperand(operation) {
    const currentValue = this.currentInput || this.firstOperand;
    if (operation === operations.ratio && parseFloat(currentValue) === 0) {
      this.resultForView = 'ERROR';
      this.reset();
    } else {
      const result = stringToNum(operation, currentValue);
      this.firstOperand = result;
      this.currentInput = null;
      this.activeResult = true;
      this.operationComplete = true;
      this.updateViewFromFirstOperand();
    }
  }

  operationWithTwoOperand(operation) {
    if (this.currentInput || this.firstOperand) {
      if (
        this.firstOperand &&
        this.readyToOperationWithTwoOperand &&
        !this.operationComplete &&
        this.operation
      ) {
        this.executeCurrentOperation();
        this.operation = operation;
        this.readyToOperationWithTwoOperand = false;
        this.operationComplete = false;
      } else if (this.firstOperand && this.secondOperand) {
        this.operation = operation;
      } else {
        this.firstOperand = this.currentInput || this.firstOperand;
        this.currentInput = '';
        this.operation = operation;
        this.activeResult = true;
        this.operationComplete = false;
      }
    } else {
      this.operation = operation;
    }
  }

  sum() {
    this.operationWithTwoOperand(operations.sum);
  }

  subtraction() {
    this.operationWithTwoOperand(operations.subtraction);
  }

  multiple() {
    this.operationWithTwoOperand(operations.multiple);
  }

  division() {
    this.operationWithTwoOperand(operations.division);
  }

  equal() {
    this.executeCurrentOperation();
    this.operationComplete = true;
  }

  percent() {
    if (this.currentInput || this.firstOperand) {
      if (this.firstOperand && !this.operationComplete) {
        this.currentInput = this.currentInput || this.secondOperand;
        if (
          this.operation === operations.multiple ||
          this.operation === operations.division
        ) {
          this.currentInput = stringToNum(
            operations.percent,
            this.currentInput
          );
        } else {
          this.currentInput = stringToNum(
            operations.percent,
            this.this.firstOperand * this.currentInput
          );
        }
        this.executeCurrentOperation();
      }
    }
  }

  math10Power() {
    this.operationWithSingleOperand(operations.power10);
  }

  mathCbrt() {
    this.operationWithSingleOperand(operations.cbrt);
  }

  mathCube() {
    this.operationWithSingleOperand(operations.cube);
  }

  mathE() {
    this.operationWithoutOperand(operations.E);
  }

  mathExp() {
    this.operationWithSingleOperand(operations.exp);
  }

  mathFactorial() {
    this.operationWithSingleOperand(operations.factorial);
  }

  mathNthRoot() {
    this.operationWithTwoOperand(operations.nthRoot);
  }

  mathPower() {
    this.operationWithTwoOperand(operations.power);
  }

  mathPI() {
    this.operationWithoutOperand(operations.PI);
  }

  mathRatio() {
    this.operationWithSingleOperand(operations.ratio);
  }

  mathSqrt() {
    this.operationWithSingleOperand(operations.sqrt);
  }

  mathSquare() {
    this.operationWithSingleOperand(operations.square);
  }
}
