import { Command } from '../command';

export class CommandMemoryCall extends Command {
  execute() {
    this.app.activeOperator.memoryCall();
    this.display.render();
    return false;
  }
}
