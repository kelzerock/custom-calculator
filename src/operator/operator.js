export class Operator {
  currentInput = null;

  firstOperand = null;

  operation = null;

  resultForView = null;

  secondOperand = null;

  setNum(value) {
    if (this.currentInput && this.currentInput !== '0') {
      this.currentInput += value;
    } else {
      this.currentInput = value;
    }
    this.resultForView = this.currentInput;
  }

  resetAC() {
    this.currentInput = null;
    this.firstOperand = null;
    this.secondOperand = null;
    this.operation = null;
    this.resultForView = null;
  }
}
