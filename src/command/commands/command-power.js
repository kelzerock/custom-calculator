import { Command } from '../command';

export class CommandPower extends Command {
  execute() {
    this.app.activeOperator.mathPower();
    this.display.render();
  }
}
