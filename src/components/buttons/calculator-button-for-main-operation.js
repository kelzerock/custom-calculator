import { calculatorButton } from './calculator-button';
import styles from './calculator-button.module.scss';

export const calculatorButtonForMainOperation = (
  parent,
  value,
  command,
  app
) => {
  const button = calculatorButton(parent, value, command, app);
  button.classList.add(styles.buttonForMainOperation);
  return button;
};
