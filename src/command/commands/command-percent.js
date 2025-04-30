import { Command } from '../command';

export class CommandPercent extends Command {
  execute() {
    this.app.activeOperator.percent();
    this.display.render();
  }
}
