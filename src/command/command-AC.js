import { Command } from './command';

export class CommandAC extends Command {
  // constructor() {
  //   super();
  // }

  execute() {
    this.app.activeOperator.resetAC();
    this.display.render();
  }
}
