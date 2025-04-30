import { Command } from '../command';

export class CommandRatio extends Command {
  execute() {
    this.app.activeOperator.mathRatio();
    this.display.render();
  }
}
