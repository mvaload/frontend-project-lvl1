import { countRounds, startGame } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomNumber = () => Math.floor(Math.random() * Math.floor(100));

const isEven = (number) => number % 2 === 0;

export default () => {
  const gameData = [];
  for (let i = 0; i < countRounds; i += 1) {
    const number = getRandomNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    gameData.push({ quetion: number, answer: correctAnswer });
  }
  startGame(gameData, description);
};

