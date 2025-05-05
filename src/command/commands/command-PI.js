import { Command } from '../command';

export class CommandPI extends Command {
  execute() {
    this.app.activeOperator.mathPI();
    this.display.render();
    return true;
  }
}
