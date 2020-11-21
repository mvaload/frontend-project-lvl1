import { countRounds, startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export default () => {
  const gameData = [];
  for (let i = 0; i < countRounds; i += 1) {
    const number = getRandomNumber(1, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    gameData.push({ quetion: number, answer: correctAnswer });
  }
  startGame(gameData, description);
};
