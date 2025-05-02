import {
  Command10Power,
  CommandAC,
  CommandCbrt,
  CommandCube,
  CommandDivision,
  CommandE,
  CommandEqual,
  CommandExp,
  CommandFactorial,
  CommandMemoryCall,
  CommandMemoryClean,
  CommandMemorySubtraction,
  CommandMemorySum,
  CommandMultiple,
  CommandNthRoot,
  CommandNumber,
  CommandPercent,
  CommandPI,
  CommandPlug,
  CommandPoint,
  CommandPower,
  CommandRatio,
  CommandRevertSign,
  CommandSqrt,
  CommandSquare,
  CommandSubtraction,
} from '../command';
import { CommandSum } from '../command/commands/command-sum';
import {
  calculatorButtonForMainOperation,
  calculatorButtonForNumber,
  calculatorButtonForOtherOperation,
} from '../components';

export const databaseButtons = [
  {
    value: 'UNDO',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
    widthCell: 2,
  },
  {
    value: 'mc',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandMemoryClean,
  },
  {
    value: 'm+',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandMemorySum,
  },
  {
    value: 'm-',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandMemorySubtraction,
  },
  {
    value: 'mr',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandMemoryCall,
  },
  {
    value: 'AC',
    functionUI: calculatorButtonForMainOperation,
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
    command: CommandPercent,
  },
  {
    value: '÷',
    functionUI: calculatorButtonForMainOperation,
    command: CommandDivision,
  },
  {
    value: '2nd',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPlug,
  },
  {
    value: 'x²',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandSquare,
  },
  {
    value: 'x³',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandCube,
  },
  {
    value: 'xʸ',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandPower,
  },
  {
    value: 'ex',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandExp,
  },
  {
    value: '10x',
    functionUI: calculatorButtonForOtherOperation,
    command: Command10Power,
  },
  { value: '7', functionUI: calculatorButtonForNumber, command: CommandNumber },
  { value: '8', functionUI: calculatorButtonForNumber, command: CommandNumber },
  { value: '9', functionUI: calculatorButtonForNumber, command: CommandNumber },
  {
    value: '×',
    functionUI: calculatorButtonForMainOperation,
    command: CommandMultiple,
  },
  {
    value: '1/x',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandRatio,
  },
  {
    value: '√x',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandSqrt,
  },
  {
    value: '∛x',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandCbrt,
  },
  {
    value: 'y√x',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandNthRoot,
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
    command: CommandSubtraction,
  },
  {
    value: 'x!',
    functionUI: calculatorButtonForOtherOperation,
    command: CommandFactorial,
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
    command: CommandE,
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
    command: CommandSum,
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
    command: CommandPI,
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
    command: CommandEqual,
  },
];
