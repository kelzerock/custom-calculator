export class Display {
  display;

  constructor(displayElement, app) {
    this.display = displayElement;
    this.app = app;
    this.render();
  }

  render() {
    this.display.textContent = this.app.activeOperator.resultForView || 0;
  }
}
