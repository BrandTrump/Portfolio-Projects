'use strict';

// Starting Elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
// No need for # when using getElementById
const score1EL = document.getElementById('score--1');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active'); 
    diceEL.classList.add('hidden');
    
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    score0EL.textContent = 0;
    score1EL.textContent = 0;
}
init();

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}

// Rolling dice funcitonality 
btnRoll.addEventListener('click', function() {
    if(playing) {
        // Generate random dice roll
        const dice = diceEL.textContent = Math.trunc(Math.random() * 6) + 1;
    
        // Display the dice
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`;
        
        // Check for rolled 1
        if(dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function() {
    if(playing && currentScore > 0) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
   
        if(scores[activePlayer] >= 100) {
            playing = false;
            diceEL.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
   
        } else {
           switchPlayer();
        }
    }
})

btnNew.addEventListener('click', init);

