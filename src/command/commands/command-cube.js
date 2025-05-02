import { Command } from '../command';

export class CommandCube extends Command {
  execute() {
    this.app.activeOperator.mathCube();
    this.display.render();
    return true;
  }
}
