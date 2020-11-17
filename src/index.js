import promptly from 'promptly';

export const countRounds = 3;

export default async (gameData, description) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  let achievement = true;
  /* eslint-disable-next-line */
  for (const data of gameData) {
    console.log(`Question: ${data.quetion}`);
    const correctAnswer = data.answer;
    const userAnswer = await promptly.prompt('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      achievement = false;
      break;
    }
    console.log('Correct!');
  }
  if (achievement) {
    console.log(`Congratulations, ${name}!`);
  }
};
