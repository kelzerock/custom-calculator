import { Command } from '../command';

export class Command10Power extends Command {
  execute() {
    this.app.activeOperator.math10Power();
    this.display.render();
    return true;
  }
}
