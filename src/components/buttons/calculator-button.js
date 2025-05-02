import styles from './calculator-button.module.scss';

export const calculatorButton = (parent, element, command) => {
  const button = document.createElement('button');
  const text = document.createElement('span');
  text.textContent = element.value;
  text.classList.add(styles.span);
  button.append(text);
  button.classList.add('button');
  parent.append(button);
  button.addEventListener('click', () => command.execute());

  if (element.beforeUp) {
    const info = document.createElement('span');
    info.textContent = element.beforeUp;
    info.classList.add(styles.beforeUp);
    text.append(info);
  }
  if (element.beforeUp) {
    const info = document.createElement('span');
    info.textContent = element.beforeUp;
    info.classList.add(styles.beforeUp);
    text.append(info);
  }
  if (element.beforeDown) {
    const info = document.createElement('span');
    info.textContent = element.beforeDown;
    info.classList.add(styles.beforeDown);
    text.append(info);
  }
  if (element.afterUp) {
    const info = document.createElement('span');
    info.textContent = element.afterUp;
    info.classList.add(styles.afterUp);
    text.append(info);
  }
  if (element.afterDown) {
    const info = document.createElement('span');
    info.textContent = element.afterDown;
    info.classList.add(styles.afterDown);
    text.append(info);
  }
  return button;
};
