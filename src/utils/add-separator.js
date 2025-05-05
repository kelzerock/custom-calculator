const mainSeparator = (string) =>
  string
    .split('')
    .reverse()
    .map((el, i) =>
      (i + 1) % 3 === 0 && i !== string.length - 1 ? `˙${el}` : el
    )
    .reverse()
    .join('');

const lastPartSeparator = (string) =>
  string
    .split('')
    .map((el, i) =>
      (i + 1) % 3 === 0 && i !== string.length - 1 ? `${el}˙` : el
    )
    .join('');

export const addSeparator = (string) => {
  if (
    typeof string !== 'string' ||
    Number.isNaN(Number(string.replace('-', '').replace('.', '')))
  ) {
    return 'ERROR';
  }
  const isNegative = string.includes('-');
  const cutString = isNegative ? string.slice(1) : string;
  let result = '';
  if (cutString.includes('.')) {
    const [firstPart, secondPart] = cutString.split('.');
    result = `${mainSeparator(firstPart)}.${lastPartSeparator(secondPart)}`;
  } else {
    result = mainSeparator(cutString);
  }
  return isNegative ? `-${result}` : result;
};
