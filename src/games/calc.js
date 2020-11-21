import { countRounds, startGame } from '../index.js';

const description = 'What is the result of the expression?';
const additionalInfo = true;
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

export default () => {
  const gameData = [];
  for (let i = 0; i < countRounds; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const sign = operators[Math.floor(Math.random() * operators.length)];
    const expression = `${number1} ${sign} ${number2}`;
    const correctAnswer = String(calculate(number1, number2, sign));
    gameData.push({ quetion: expression, answer: correctAnswer });
  }
  startGame(gameData, description, additionalInfo);
};

