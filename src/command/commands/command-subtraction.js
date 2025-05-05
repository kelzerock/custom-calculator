import { Command } from '../command';

export class CommandSubtraction extends Command {
  execute() {
    this.app.activeOperator.subtraction();
    this.display.render();
    return true;
  }
}
