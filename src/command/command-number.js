import { Command } from './command';

export class CommandNumber extends Command {
  constructor(app, display, value) {
    super(app, display);
    this.app = app;
    this.display = display;
    this.value = value;
  }

  execute() {
    this.app.activeOperator.getNum(this.value);
    this.display.render(this.app.activeOperator.resultForView);
  }
}
