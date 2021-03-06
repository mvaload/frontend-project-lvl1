import { countRounds, startGame } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (operator1, operator2, operand) => {
  switch (operand) {
    case '+':
      return operator1 + operator2;
    case '-':
      return operator1 - operator2;
    case '*':
      return operator1 * operator2;
    default:
      throw new Error(`Unknown operand: '${operand}'`);
  }
};

export default () => {
  const gameData = [];
  for (let i = 0; i < countRounds; i += 1) {
    const number1 = getRandomNumber(0, 50);
    const number2 = getRandomNumber(0, 50);
    const sign = operators[getRandomNumber(0, operators.length - 1)];
    const expression = `${number1} ${sign} ${number2}`;
    const correctAnswer = String(calculate(number1, number2, sign));
    gameData.push({ quetion: expression, answer: correctAnswer });
  }
  startGame(gameData, description);
};
