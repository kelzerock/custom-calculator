import { Command } from '../command';

export class CommandNthRoot extends Command {
  execute() {
    this.app.activeOperator.mathNthRoot();
    this.display.render();
    return true;
  }
}
