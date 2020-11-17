import { countRounds } from '../index.js';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const gameData = [];

const getRandomNumber = () => Math.floor(Math.random() * Math.floor(100));

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
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

for (let i = 0; i < countRounds; i += 1) {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  gameData.push({ quetion: number, answer: correctAnswer });
}
