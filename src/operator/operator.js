export class Operator {
  currentInput = null;

  firstOperand = null;

  operation = null;

  resultForView = null;

  secondOperand = null;

  updateView() {
    this.resultForView = this.currentInput;
  }

  setNum(value) {
    if (this.currentInput && this.currentInput !== '0') {
      this.currentInput += value;
    } else {
      this.currentInput = value;
    }
    this.updateView();
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
      this.updateView();
    }
  }
}
