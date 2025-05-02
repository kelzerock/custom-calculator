import { calculatorButton } from './calculator-button';
import styles from './calculator-button.module.scss';

export const calculatorButtonForOtherOperation = (
  parent,
  element,
  command,
  app
) => {
  const button = calculatorButton(parent, element, command, app);
  button.classList.add(styles.buttonForOtherOperation);
  if (element.widthCell) {
    button.style.gridColumnEnd = `span ${element.widthCell}`;
  }
  return button;
};
