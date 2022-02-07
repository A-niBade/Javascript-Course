'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

// INIT GAME
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // NO INPUT
  if (!guess) {
    document.querySelector('.message').textContent = 'No number bobo';

    // PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Numero correcto!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    
    // NUMERO ALTO
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Demasiado alto';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Perdiste malardo';
      document.querySelector('.score').textContent = 0;
    }

    // NUMERO BAJO
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Demasiado bajo';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Perdiste malardo';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// RESET GAME
document.querySelector('.again').addEventListener('click', function() {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'; 
})