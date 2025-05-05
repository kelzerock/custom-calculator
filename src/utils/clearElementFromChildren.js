export const clearElementFromChildren = (element) => {
  while (element.firstChild) {
    element.firstChild.remove();
  }
};
