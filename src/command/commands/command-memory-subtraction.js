import { Command } from '../command';

export class CommandMemorySubtraction extends Command {
  execute() {
    this.app.activeOperator.memorySubtraction();
    this.display.render();
  }
}
