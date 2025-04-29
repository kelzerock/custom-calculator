export const calculatorButton = (parent, value, command) => {
  const button = document.createElement('button');
  button.textContent = value;
  button.classList.add('button');
  parent.append(button);
  button.addEventListener('click', () => command.execute());
  return button;
};
