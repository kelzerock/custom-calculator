import { calculatorButton } from './calculator-button';
import styles from './calculator-button.module.scss';

export const calculatorButtonForOtherOperation = (
  parent,
  value,
  command,
  widthCell
) => {
  const button = calculatorButton(parent, value, command, widthCell);
  button.classList.add(styles.buttonForOtherOperation);
  button.style.gridColumnEnd = `span ${widthCell}`;
  return button;
};
