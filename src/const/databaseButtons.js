import {
  CommandAC,
  CommandNumber,
  CommandPlug,
  CommandPoint,
  CommandRevertSign,
} from '../command';
import {
  calculatorButtonForMainOperation,
  calculatorButtonForNumber,
  calculatorButtonForOtherOperation,
} from '../components';

export const databaseButtons = [
  {
    value: '(',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: ')',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'mc',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'm+',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'm-',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'mr',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'AC',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandAC,
  },
  {
    value: '±',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandRevertSign,
  },
  {
    value: '%',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: '÷',
    functionUI: calculatorButtonForMainOperation,
    command: CommandPlug,
  },
  {
    value: '2nd',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'x2',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'x3',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'xy',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'ex',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: '10x',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  { value: '7', functionUI: calculatorButtonForNumber, command: CommandNumber },
  { value: '8', functionUI: calculatorButtonForNumber, command: CommandNumber },
  { value: '9', functionUI: calculatorButtonForNumber, command: CommandNumber },
  {
    value: '×',
    functionUI: calculatorButtonForMainOperation,
    command: CommandPlug,
  },
  {
    value: '1/x',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: '√x',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: '∛x',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'y√x',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'ln',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'log10',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: '4',
    functionUI: calculatorButtonForNumber,
    command: CommandNumber,
  },
  {
    value: '5',
    functionUI: calculatorButtonForNumber,
    command: CommandNumber,
  },
  {
    value: '6',
    functionUI: calculatorButtonForNumber,
    command: CommandNumber,
  },
  {
    value: '-',
    functionUI: calculatorButtonForMainOperation,
    command: CommandPlug,
  },
  {
    value: 'x!',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'sin',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'cos',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'tan',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'e',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'EE',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: '1',
    functionUI: calculatorButtonForNumber,
    command: CommandNumber,
  },
  {
    value: '2',
    functionUI: calculatorButtonForNumber,
    command: CommandNumber,
  },
  {
    value: '3',
    functionUI: calculatorButtonForNumber,
    command: CommandNumber,
  },
  {
    value: '+',
    functionUI: calculatorButtonForMainOperation,
    command: CommandPlug,
  },
  {
    value: 'Rad',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'sinh',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'cosh',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'tanh',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: '𝛑',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'Rand',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: '0',
    functionUI: calculatorButtonForNumber,
    command: CommandNumber,
    widthCell: 2,
  },
  {
    value: ',',
    functionUI: calculatorButtonForNumber,
    command: CommandPoint,
  },
  {
    value: '=',
    functionUI: calculatorButtonForMainOperation,
    command: CommandPlug,
  },
];
