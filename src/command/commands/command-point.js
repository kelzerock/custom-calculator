import { Command } from '../command';

export class CommandPoint extends Command {
  execute() {
    this.app.activeOperator.setPoint();
    this.display.render();
    return true;
  }
}
