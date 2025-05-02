import { Command } from '../command';

export class CommandSquare extends Command {
  execute() {
    this.app.activeOperator.mathSquare();
    this.display.render();
    return true;
  }
}
