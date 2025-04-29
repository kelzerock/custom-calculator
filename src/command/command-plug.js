import { Command } from './command';

export class CommandPlug extends Command {
  constructor(app, display, value) {
    super(app, display);
    this.app = app;
    this.display = display;
    this.value = value;
  }

  execute() {
    console.log(`${this.value} - Function in develop mode`);
  }
}
