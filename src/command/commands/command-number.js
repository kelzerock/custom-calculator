import { Command } from '../command';

export class CommandNumber extends Command {
  constructor(app, display, value) {
    super(app, display);
    this.value = value;
  }

  execute() {
    this.app.activeOperator.setNum(this.value);
    this.display.render();
  }
}
