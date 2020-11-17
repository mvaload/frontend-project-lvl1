import { countRounds } from '../index.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export const gameData = [];

const getRandomNumber = () => Math.floor(Math.random() * Math.floor(100));

const isEven = (number) => number % 2 === 0;

for (let i = 0; i < countRounds; i += 1) {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  gameData.push({ quetion: number, answer: correctAnswer });
}
