import { calculatorButton } from '../components';
import { databaseButtons } from '../const/databaseButtons';

export const createButtonsUI = (parent, app) => {
  databaseButtons.forEach((el) => {
    const Command = el.command;
    calculatorButton(parent, el, new Command(app, app.display, el.value), app);
  });
};
