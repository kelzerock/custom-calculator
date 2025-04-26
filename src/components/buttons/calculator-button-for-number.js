import { CalculatorButton } from './calculator-button';
import styles from './calculator-button.module.scss';

export class CalculatorButtonForNumber extends CalculatorButton {
  constructor(parent, value, command) {
    super(parent, value, command);
    this.button.classList.add(styles.buttonForNumber);
  }
}
