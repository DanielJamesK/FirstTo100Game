'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const currentBg1 = document.getElementById('current-bg-1')
const currentBg2 = document.getElementById('current-bg-2')
const btnBgChange1 = document.getElementById('change-bg-1')
const btnBgChange2 = document.getElementById('change-bg-2')
const btnBgChange3 = document.getElementById('change-bg-3')
const btnBgChange4 = document.getElementById('change-bg-4')

let scores, currentScore, activePlayer, playing

// Starting Conditions
const init = function () {
  scores = [0, 0]
  currentScore = 0
  activePlayer = 0
  playing = true

  score0El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0

  diceEl.classList.add('hidden')
  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player0El.classList.add('player--active')
  player1El.classList.remove('player--active')
}

init()

btnBgChange1.addEventListener('click', function bgChange1() {
  document.querySelector('body').style.backgroundImage = 'linear-gradient(to top left, #120249 0%, #8044f0 100%)'
  currentBg1.style.backgroundColor = '#120249'
  currentBg2.style.backgroundColor = '#120249'
  score0El.style.color = '#120249'
  score1El.style.color = '#120249'
  document.querySelector('.name1').style.color = '#120249'
  document.querySelector('.name2').style.color = '#120249'

})
btnBgChange2.addEventListener('click', function bgChange2() {
  document.querySelector('body').style.backgroundImage = 'linear-gradient(to top left, #012e15 0%, #45fcc5 100%)'
  currentBg1.style.backgroundColor = '#012e15'
  currentBg2.style.backgroundColor = '#012e15'
  score0El.style.color = '#012e15'
  score1El.style.color = '#012e15'
  document.querySelector('.name1').style.color = '#012e15'
  document.querySelector('.name2').style.color = '#012e15'
})
btnBgChange3.addEventListener('click', function bgChange3() {
  document.querySelector('body').style.backgroundImage = 'linear-gradient(to top left, #031949 0%, #0973fd 100%'
  currentBg1.style.backgroundColor = '#031949'
  currentBg2.style.backgroundColor = '#031949'
  score0El.style.color = '#031949'
  score1El.style.color = '#031949'
  document.querySelector('.name1').style.color = '#031949'
  document.querySelector('.name2').style.color = '#031949'
})
btnBgChange4.addEventListener('click', function bgChange4() {
  document.querySelector('body').style.backgroundImage = 'linear-gradient(to top left, #817903 0%, #f0fd3b 100%)'
  currentBg1.style.backgroundColor = '#817903'
  currentBg2.style.backgroundColor = '#817903'
  score0El.style.color = '#817903'
  score1El.style.color = '#817903'
  document.querySelector('.name1').style.color = '#817903'
  document.querySelector('.name2').style.color = '#817903'
})

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {

    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1

    // 2. Display dice
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice
      document.getElementById(`current--${activePlayer}`).textContent = currentScore

    } else {
      // Switch to next player
      switchPlayer()
    }
  }
})

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false
      diceEl.classList.add('hidden')
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    } else {
      // Switch to the next player
      switchPlayer()
    }
  }
})

btnNew.addEventListener('click', init)



