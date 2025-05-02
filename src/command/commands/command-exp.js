import { Command } from '../command';

export class CommandExp extends Command {
  execute() {
    this.app.activeOperator.mathExp();
    this.display.render();
    return true;
  }
}
