import promptly from 'promptly';

export const countRounds = 3;

export const startGame = async (gameData, description, additionalInfo = false) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  /* eslint-disable-next-line */
  for (const {quetion, answer} of gameData) {
    console.log(`Question: ${quetion}`);
    const correctAnswer = answer;
    /* eslint-disable no-await-in-loop */
    const userAnswer = await promptly.prompt('Your answer: ');
    if (correctAnswer !== userAnswer) {
      if (additionalInfo) {
        console.log(`Question: ${quetion}!`);
        console.log(`Your answer: ${userAnswer}`);
      }
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
