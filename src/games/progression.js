import { countRounds, startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';
const additionalInfo = true;

const makeProgression = (length, start, step) => {
  const progression = [];
  let startElement = start;
  for (let i = 0; i < length; i += 1) {
    progression[i] = startElement;
    startElement += step;
  }
  return progression;
};

export default () => {
  const gameData = [];
  const progressionLength = 10;
  for (let i = 0; i < countRounds; i += 1) {
    const start = getRandomNumber(0, 90);
    const step = getRandomNumber(2, 10);
    const hiddenElement = getRandomNumber(0, progressionLength - 1);
    const progression = makeProgression(progressionLength, start, step);
    const correctAnswer = String(progression[hiddenElement]);
    progression[hiddenElement] = '..';
    const quetion = progression.join(' ');
    gameData.push({ quetion, answer: correctAnswer });
  }
  startGame(gameData, description, additionalInfo);
};
