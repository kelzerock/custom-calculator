import { addSeparator } from '../utils/add-separator';
import { clearElementFromChildren } from '../utils/clearElementFromChildren';
import styles from './display.module.scss';

const MAX_LENGTH = 12;

export class Display {
  display;

  constructor(displayElement, app) {
    this.display = displayElement;
    this.app = app;
    this.render();
  }

  render() {
    clearElementFromChildren(this.display);
    const value = this.app.activeOperator.resultForView || '0';
    const cutValue = value.slice(
      0,
      value.includes('.') ? MAX_LENGTH + 1 : MAX_LENGTH
    );
    this.display.textContent = addSeparator(cutValue);
    if (this.app.activeOperator.memoryOperand) {
      const memoryBlock = document.createElement('span');
      memoryBlock.className = styles.memory;
      memoryBlock.textContent = `memory: ${this.app.activeOperator.memoryOperand}`;
      this.display.append(memoryBlock);
    }
  }
}
