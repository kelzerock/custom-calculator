import { Command } from '../command';

export class CommandEqual extends Command {
  execute() {
    this.app.activeOperator.equal();
    this.display.render();
    return true;
  }
}
