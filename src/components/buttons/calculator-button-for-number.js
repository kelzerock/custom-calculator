import { calculatorButton } from './calculator-button';
import styles from './calculator-button.module.scss';

export const calculatorButtonForNumber = (parent, value, command) => {
  const button = calculatorButton(parent, value, command);
  button.classList.add(styles.buttonForNumber);
  return button;
};
