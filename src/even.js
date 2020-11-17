import promptly from 'promptly';

export default async () => {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const userAnswer = await promptly.prompt('Your answer: ');
    if (correctAnswer === userAnswer) {
        console.log('Correct!')
    } else {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const getRandomNumber = () => {
    return Math.floor(Math.random() * Math.floor(100));
};

const isEven = (number) => {
    return number % 2 === 0;
};
