import { Command } from '../command';

export class CommandFactorial extends Command {
  execute() {
    this.app.activeOperator.mathFactorial();
    this.display.render();
    return true;
  }
}
