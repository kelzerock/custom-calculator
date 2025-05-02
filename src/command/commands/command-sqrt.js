import { Command } from '../command';

export class CommandSqrt extends Command {
  execute() {
    this.app.activeOperator.mathSqrt();
    this.display.render();
    return true;
  }
}
