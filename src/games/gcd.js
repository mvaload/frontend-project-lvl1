import { countRounds, startGame } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

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
    const number1 = getRandomNumber(2, 100);
    const number2 = getRandomNumber(2, 100);
    const pairNumbers = `${number1} ${number2}`;
    const correctAnswer = String(getGcd(number1, number2));
    gameData.push({ quetion: pairNumbers, answer: correctAnswer });
  }
  startGame(gameData, description);
};
