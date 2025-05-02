import { Command } from '../command';

export class CommandMultiple extends Command {
  execute() {
    this.app.activeOperator.multiple();
    this.display.render();
    return true;
  }
}
