import { Command } from '../command';

export class CommandE extends Command {
  execute() {
    this.app.activeOperator.mathE();
    this.display.render();
    return false;
  }
}
