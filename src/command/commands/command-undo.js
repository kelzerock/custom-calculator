import { Command } from '../command';

export class CommandUndo extends Command {
  execute() {
    this.app.undo();
    this.display.render();
    return false;
  }
}
