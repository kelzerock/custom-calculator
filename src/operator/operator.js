export class Operator {
  firstOperand = null;

  secondOperand = null;

  operation = null;

  resultForView = null;

  getNum(number) {
    if (this.firstOperand) {
      this.firstOperand += number;
    } else {
      this.firstOperand = number;
    }
    this.resultForView = this.firstOperand;
  }
}
