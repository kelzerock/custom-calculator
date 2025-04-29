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
    this.display = new Display(display);
    const boxForButtons = document.createElement('div');

    display.className = styles.display;
    boxForButtons.className = styles.boxForButtons;

    mainElement.append(display);
    mainElement.append(boxForButtons);

    createButtonsUI(boxForButtons, this);
  }

  executeCommand(command) {
    if (command.execute()) this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    if (command != null) command.undo();
  }
}
