'use strict';

//TODO:
//@- When player press Check!, game checks input field vs secret number
//@- If comparison is equal, update message to Correct with green background, show secret number, and update highscore
//@- If comparison is not equal, decrease score by 1 until it reaches 0, display you lost with red background, don't show secret number, and keep highscore
//@- If player press Again!, reset all except highscore
//@- Player can't check if input field is empty

//START
//...
//*- Generate secret Number, set Starting Score 20, and Highscore 0
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    //*- Store guess number to do operations on it
    const guess = Number(document.querySelector('.guess').value);

    //*- We used !guess to make false true to enter if
    if (!guess) {
        displayMessage('⚠️ No Number/Zero Entered');

    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('🥳 Correct Number!');

        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '👎 Wrong, ⬆️ High Number' : '👎 Wrong, ⬇️ Low Number');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.number').textContent = secretNumber;
            displayMessage('📛 You Lost!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#720000';
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    //*- Generate new Secret Number
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');

    //*- Input Field has no .textContent
    document.querySelector('.guess').value = '';

    //*- Give player starting Score
    score = 20;
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.number').style.width = '15rem';
})

//NOTE: When player click Again!, Secret Number must be generated again to be different than last time

//NOTE: If we manipulate Input Field, we can't maniplate with .textContent, we can use .value

//NOTE: Guess value will not be manipulated, make it const

//NOTE: 
//*- NEW WAY AFTER DEFINING THE FUNCTION OF MANIPULATION => displayMessage('⚠️ No Number/Zero Entered');
//*- OLD WAY => document.querySelector('.message').textContent = '⚠️ No Number/Zero Entered';







