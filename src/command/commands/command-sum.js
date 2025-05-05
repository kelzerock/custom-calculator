import { Command } from '../command';

export class CommandSum extends Command {
  execute() {
    this.app.activeOperator.sum();
    this.display.render();
    return true;
  }
}
