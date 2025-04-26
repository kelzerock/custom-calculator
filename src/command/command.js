export class Command {
  app;

  display;

  backup;

  constructor(app, display) {
    this.app = app;
    this.display = display;
    this.backup = '';
  }

  saveBackup() {
    this.backup = this.display.value;
  }

  undo() {
    this.display.value = this.backup;
  }

  execute() {
    throw new Error(`Need add execute method in this command ${this}`);
  }
}
