'use strict';

let secretNumber = document.querySelector('.number').value = Math.trunc(Math.random() * 20);

let score = document.querySelector('.score').textContent = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.again').addEventListener('click', function() {
    secretNumber = document.querySelector('.number').value = Math.trunc(Math.random() * 20);
    score = 20;
    score = document.querySelector('.score').textContent = score;

    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When guess is not a number
    if(!guess) {
        displayMessage('Not a number!');
    } else if(guess > 20 || guess < 1) {
        displayMessage('Number Must Be Between 1 and 20!');

        // When player wins 
    } else if(guess === secretNumber){
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        
        // When guess is wrong
    } else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lose!');
        }
    }
}); 
