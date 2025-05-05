import { Command } from '../command';

export class CommandAC extends Command {
  execute() {
    this.app.activeOperator.resetAC();
    this.display.render();
    return true;
  }
}
