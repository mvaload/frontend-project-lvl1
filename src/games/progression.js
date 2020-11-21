import { countRounds, startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';
const additionalInfo = true;

const makeProgression = (length, start, step) => {
  const row = [];
  let startElement = start;
  for (let i = 0; i < length; i += 1) {
    row[i] = startElement;
    startElement += step;
  }
  return row;
};

export default () => {
  const gameData = [];
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
  startGame(gameData, description, additionalInfo);
};

