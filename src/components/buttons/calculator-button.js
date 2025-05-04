import styles from './calculator-button.module.scss';

export const calculatorButton = (parent, element, command, app) => {
  const button = document.createElement('button');
  const text = document.createElement('span');

  text.textContent = element.value;
  text.classList.add(styles.span);
  button.classList.add('button');

  switch (element.type) {
    case 'calculatorButtonForMainOperation':
      button.classList.add(styles.buttonForMainOperation);
      break;
    case 'calculatorButtonForNumber':
      button.classList.add(styles.buttonForNumber);
      break;
    case 'calculatorButtonForOtherOperation':
      button.classList.add(styles.buttonForOtherOperation);
      break;
    default:
      return;
  }

  if (element.widthCell) {
    button.style.gridColumnEnd = `span ${element.widthCell}`;
  }

  button.append(text);
  parent.append(button);

  button.addEventListener('click', () => app.executeCommand(command));

  const labelsMap = {
    beforeUp: styles.beforeUp,
    beforeDown: styles.beforeDown,
    afterUp: styles.afterUp,
    afterDown: styles.afterDown,
  };

  Object.keys(labelsMap).forEach((key) => {
    if (element[key]) {
      const info = document.createElement('span');
      info.textContent = element[key];
      info.classList.add(labelsMap[key]);
      text.append(info);
    }
  });
};
