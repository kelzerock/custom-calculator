import { operations } from '../operations/operations';
import { stringToNum } from '../utils/string-to-num';

export class Operator {
  currentInput = null;

  firstOperand = null;

  operation = null;

  resultForView = null;

  secondOperand = null;

  updateViewFromCurrentInput() {
    this.resultForView = this.currentInput;
  }

  updateViewFromFirstOperand() {
    this.resultForView = this.firstOperand;
  }

  resetAC() {
    this.currentInput = null;
    this.firstOperand = null;
    this.secondOperand = null;
    this.operation = null;
    this.resultForView = null;
  }

  revertSign() {
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

  setNum(value) {
    if (this.currentInput && this.currentInput !== '0') {
      this.currentInput += value;
    } else {
      this.currentInput = value;
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
    this.updateView();
  }

  executeCurrentOperation() {
    this.secondOperand = this.currentInput;
    const result = stringToNum(
      this.operation,
      this.firstOperand,
      this.secondOperand
    );
    this.firstOperand = result;
    this.secondOperand = null;
    this.currentInput = null;
    this.updateViewFromFirstOperand();
    return result;
  }

  operationWithToOperand(operation) {
    if (this.currentInput) {
      if (this.firstOperand) {
        this.executeCurrentOperation();
      } else {
        this.firstOperand = this.currentInput;
        this.currentInput = '';
        this.operation = operation;
      }
    }
  }

  sum() {
    this.operationWithToOperand(operations.sum);
  }

  subtraction() {
    this.operationWithToOperand(operations.subtraction);
  }

  multiple() {
    this.operationWithToOperand(operations.multiple);
  }

  division() {
    this.operationWithToOperand(operations.division);
  }
}
