import { countRounds } from '../index.js';

export const description = 'What is the result of the expression?';
export const additionalInfo = true;
export const gameData = [];

const operators = ['+', '-', '*'];

const getRandomNumber = () => Math.floor(Math.random() * Math.floor(20));

const calculate = (operator1, operator2, operand) => {
  let result = 0;
  switch (operand) {
    case '+': result = operator1 + operator2;
      break;
    case '-': result = operator1 - operator2;
      break;
    case '*': result = operator1 * operator2;
      break;
    default:
      break;
  }
  return result;
};

for (let i = 0; i < countRounds; i += 1) {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const sign = operators[Math.floor(Math.random() * operators.length)];
  const expression = `${number1} ${sign} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, sign));

  gameData.push({ quetion: expression, answer: correctAnswer });
}
