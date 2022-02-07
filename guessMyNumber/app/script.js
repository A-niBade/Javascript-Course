'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function(number) {
  document.querySelector('.number').textContent = number;
}
const numberWidth = function(width) {
  document.querySelector('.number').style.width = width;
}
const setBackground = function(color) {
  document.querySelector('body').style.backgroundColor = color;
}

// INIT GAME
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // NO INPUT
  if (!guess) {
    displayMessage('No value detected');

    // PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    displayNumber(secretNumber);
    setBackground('#60b347');
    numberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.check').style.display = 'none';
    // GUESS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > 1 ? 'To high!' : 'To low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// RESET GAME
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.guess').value = '';

  setBackground('#222');
  numberWidth('15rem');

  document.querySelector('.check').style.display = 'block';
});
