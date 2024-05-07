'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = `${secretNumber}`;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 You did it!';
    score++;
    document.querySelector('.score').textContent = score;
    // CHANGE BACKGROUND COLOR IF WIN
    document.querySelector('body').style.backgroundColor = '#4CCD99';
    // Change MESSAGE FONT-SIZE
    document.querySelector('.message').style.fontSize = '4rem';
    // CHANGE WIDTH OF NUMBER DIV
    document.querySelector('.number').style.width = '30rem';
    // SHOW NUMBER IF NUMBER IS CORRECT NUMBER
    document.querySelector('.number').textContent = `${secretNumber}`;
    document.querySelector('.check').style.display = 'none';


  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;

      // Change MESSAGE FONT-SIZE
      document.querySelector('.message').style.fontSize = '4rem';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;

      // Change MESSAGE FONT-SIZE
      document.querySelector('.message').style.fontSize = '4rem';
    }
  }

  if (score <= 0) {
    document.querySelector('.message').textContent = '💥 You lost the game';
    // Change MESSAGE FONT-SIZE
    document.querySelector('.message').style.fontSize = '4rem!important';
    // CHANGE BACKGROUND COLOR IF WIN
    document.querySelector('body').style.backgroundColor = '#FF1E1E';
    document.querySelector('.score-paragraphs').style.display = 'none';
    // CHANGE WIDTH OF NUMBER DIV
    document.querySelector('.number').style.width = '30rem';
    // SHOW NUMBER IF NUMBER IS CORRECT NUMBER
    document.querySelector('.number').textContent = `${secretNumber}`;
    document.querySelector('.check').style.display = 'none';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  const guess = (document.querySelector('.guess').value = ' ');

  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.message').style.fontSize = '20px';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score-paragraphs').style.display = 'block';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.check').style.display = 'block';
});
