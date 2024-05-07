'use strict';

// document.querySelector('.number').textContent = `${secretNumber}`;
let secretNumber;
let score = 20;
let highscore = 0;

function randomNumberGenerator() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

randomNumberGenerator();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 You did it!');
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

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      // Change MESSAGE FONT-SIZE
      document.querySelector('.message').style.fontSize = '4rem';
    }
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumberGenerator();
  score = 20;
  const guess = (document.querySelector('.guess').value = ' ');
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').style.fontSize = '20px';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score-paragraphs').style.display = 'block';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.check').style.display = 'block';
});
