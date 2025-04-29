import { CommandNumber } from '../command/command-number';
import { calculatorButtonForMainOperation } from '../components/buttons/calculator-button-for-main-operation';
import { calculatorButtonForNumber } from '../components/buttons/calculator-button-for-number';
import { calculatorButtonForOtherOperation } from '../components/buttons/calculator-button-for-other-operation';

export const createButtonsUI = (parent, app) => {
  new Array(10)
    .fill()
    .map((_, i) => i.toString())
    .forEach((el) => {
      calculatorButtonForNumber(
        parent,
        el,
        new CommandNumber(app, app.display, el)
      );
    });

  calculatorButtonForMainOperation(parent, '2', {
    execute: () => {
      console.log('hello');
    },
  });

  calculatorButtonForOtherOperation(parent, '3', {
    execute: () => {
      console.log('hello');
    },
  });
};
