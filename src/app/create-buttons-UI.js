import { databaseButtons } from '../const/databaseButtons';

export const createButtonsUI = (parent, app) => {
  databaseButtons.forEach((el) => {
    const Command = el.command;
    el.functionUI(parent, el, new Command(app, app.display, el.value));
  });
};
