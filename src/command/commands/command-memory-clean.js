import { Command } from '../command';

export class CommandMemoryClean extends Command {
  execute() {
    this.app.activeOperator.memoryClean();
    this.display.render();
    return true;
  }
}
