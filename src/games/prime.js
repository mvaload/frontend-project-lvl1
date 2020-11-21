import { countRounds, startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const limit = Math.sqrt(num);
  let i = 2;
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

export default () => {
  const gameData = [];
  for (let i = 0; i < countRounds; i += 1) {
    const number = getRandomNumber(2, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    gameData.push({ quetion: number, answer: correctAnswer });
  }
  startGame(gameData, description);
};

