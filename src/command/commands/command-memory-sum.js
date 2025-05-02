import { Command } from '../command';

export class CommandMemorySum extends Command {
  execute() {
    this.app.activeOperator.memorySum();
    this.display.render();
    return true;
  }
}
