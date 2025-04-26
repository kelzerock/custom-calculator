export class CalculatorButton {
  button;

  constructor(parent, value, command) {
    this.button = document.createElement('button');
    this.button.textContent = value;
    this.button.classList.add('button');
    parent.append(this.button);
    this.button.addEventListener('click', () => command.execute());
  }
}
