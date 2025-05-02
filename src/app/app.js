import { Display } from '../display/display';
import styles from './app.module.scss';
import { createButtonsUI } from './create-buttons-UI';

export class Application {
  display;

  operators = [];

  activeOperator;

  history = [];

  constructor(operator) {
    this.activeOperator = operator;
  }

  createUI() {
    const mainElement = document.querySelector('.main');
    const display = document.createElement('div');
    this.display = new Display(display, this);
    const boxForButtons = document.createElement('div');

    display.className = styles.display;
    boxForButtons.className = styles.boxForButtons;

    mainElement.append(display);
    mainElement.append(boxForButtons);

    createButtonsUI(boxForButtons, this);
  }

  executeCommand(command) {
    const {
      activeResult,
      currentInput,
      firstOperand,
      memoryOperand,
      operation,
      operationComplete,
      resultForView,
      secondOperand,
      readyToOperationWithTwoOperand,
    } = this.activeOperator;
    if (command.execute())
      this.history.push({
        activeResult,
        currentInput,
        firstOperand,
        memoryOperand,
        operation,
        operationComplete,
        resultForView,
        secondOperand,
        readyToOperationWithTwoOperand,
      });
  }

  undo() {
    if (this.history.length === 0) return;
    const state = this.history.pop();
    if (state) {
      Object.assign(this.activeOperator, state);
      this.display.render();
    }
  }
}
