import { Command } from '../command';

export class CommandRevertSign extends Command {
  execute() {
    this.app.activeOperator.revertSign();
    this.display.render();
    return false;
  }
}
