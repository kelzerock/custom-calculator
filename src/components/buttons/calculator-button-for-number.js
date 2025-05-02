import { calculatorButton } from './calculator-button';
import styles from './calculator-button.module.scss';

export const calculatorButtonForNumber = (parent, element, command) => {
  const button = calculatorButton(parent, element, command);
  button.classList.add(styles.buttonForNumber);
  if (element.widthCell) {
    button.style.gridColumnEnd = `span ${element.widthCell}`;
  }
  return button;
};
