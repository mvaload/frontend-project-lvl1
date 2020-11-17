import { countRounds } from '../index.js';

export const description = 'What number is missing in the progression?';
export const gameData = [];

const getRandomNumber = (num1, num2) => {
  const min = Math.ceil(num1);
  const max = Math.floor(num2);
  return Math.floor(Math.random() * (max - min)) + min;
};

const makeProgression = (length, start, step) => {
  const row = [];
  let startElement = start;
  for (let i = 0; i < length; i += 1) {
    row[i] = startElement;
    startElement += step;
  }
  return row;
};

const rowLength = 10;

for (let i = 0; i < countRounds; i += 1) {
  const start = getRandomNumber(0, 90);
  const step = getRandomNumber(2, 10);
  const hiddenElement = getRandomNumber(0, 9);
  const row = makeProgression(rowLength, start, step);
  const correctAnswer = String(row[hiddenElement]);
  row[hiddenElement] = '..';
  const progression = row.join(' ');
  gameData.push({ quetion: progression, answer: correctAnswer });
}
gameData.push({ additionalInfo: true });
