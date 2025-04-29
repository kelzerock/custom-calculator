export class Display {
  display;

  constructor(displayElement) {
    this.display = displayElement;
  }

  render(value) {
    this.display.textContent = value;
  }
}
