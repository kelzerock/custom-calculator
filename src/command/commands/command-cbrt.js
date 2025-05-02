import { Command } from '../command';

export class CommandCbrt extends Command {
  execute() {
    this.app.activeOperator.mathCbrt();
    this.display.render();
    return true;
  }
}
