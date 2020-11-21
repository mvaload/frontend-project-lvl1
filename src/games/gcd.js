import { countRounds, startGame } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const additionalInfo = true;

const getRandomNumber = () => {
  const min = Math.ceil(2);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

export default () => {
  const gameData = [];
  for (let i = 0; i < countRounds; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const pairNumbers = `${number1} ${number2}`;
    const correctAnswer = String(getGcd(number1, number2));
    gameData.push({ quetion: pairNumbers, answer: correctAnswer });
  }
  startGame(gameData, description, additionalInfo);
};

