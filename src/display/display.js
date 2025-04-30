import { addSeparator } from '../utils/add-separator';

const MAX_LENGTH = 12;

export class Display {
  display;

  constructor(displayElement, app) {
    this.display = displayElement;
    this.app = app;
    this.render();
  }

  render() {
    const value = this.app.activeOperator.resultForView || '0';
    const cutValue = value.slice(
      0,
      value.includes('.') ? MAX_LENGTH + 1 : MAX_LENGTH
    );
    this.display.textContent = addSeparator(cutValue);
  }
}
