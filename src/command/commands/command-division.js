import { Command } from '../command';

export class CommandDivision extends Command {
  execute() {
    this.app.activeOperator.division();
    this.display.render();
  }
}
