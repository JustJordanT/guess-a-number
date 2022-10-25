'use strict';

// console.log(document.querySelector('.message').textContent)
//
// document.querySelector('.message').textContent =
//     '🥳 Correct number!!'
//
// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10
//
// document.querySelector('.guess').value = '23'
// console.log(document.querySelector('.guess').value)

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random()*20) + 1

document.querySelector('.check')
    .addEventListener('click', function(){
        const guess = Number(document.querySelector('.guess').value)
        console.log(guess, typeof guess)

        // No input
        if (!guess) {
            document.querySelector('.message').textContent = 'No number found 🚫,' +
                ' please enter a number.'

            // When Player Wins
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct Number!'

            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').textContent = secretNumber
            document.querySelector('.number').style.width = '30rem'

            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore
            }

        } else if (guess !== secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent =
                    guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
                score--
                document.querySelector('.score').textContent = score
            } else {
                lostGame()
            }
        }

    })

document.querySelector('.again').addEventListener('click', function () {
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.message').textContent = '？Start Guessing...'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ''
})

function lostGame() {
    document.querySelector('.message').textContent = '🤯You lost the game!'
    document.querySelector('body').style.backgroundColor = 'red'
    document.querySelector('.score').textContent = 0
}