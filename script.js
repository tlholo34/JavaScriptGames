'use strict';
//random secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//score out of 20
let score = 20;
let highscore = 0;
//function that diplays message on screen
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//when the player clicks the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //if theres no input
  if (!guess) {
    displayMessage('No Number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //if its new highscore we diplay it here
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is worng
  } else if (guess !== secretNumber) {
    //if score is not 0
    if (score > 1) {
      //we display this message to hint the secret number
      displayMessage(guess > secretNumber ? 'Too high!!' : 'Too low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //else if there are no more chances we display this message
      displayMessage('You lose!');
    }
  }
});
//when player clicks the again button
document.querySelector('.again').addEventListener('click', function () {
  //we get another random secret number to be gusssed
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //we reset the score to 20
  score = 20;

  //set the screen back to normal
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
