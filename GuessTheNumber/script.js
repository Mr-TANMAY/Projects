console.log("JavaScript file loaded");
// Generate a random number between 1 and 100
let randomeNo = Math.round(Math.random() * 100) + 1;
console.log(randomeNo);

const inputGuess = document.querySelector(".input-box");
const submit = document.querySelector("#submit");
const remaining = document.querySelector(".remain");
const prevGuess = document.querySelector(".guesses");
const lowORhigh = document.querySelector(".lowHigh");
const resultMsg = document.querySelector(".resultMSG");

let preGuesses = [];
let numGuess = 1;
let gameStart = true;

submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(inputGuess.value);
    validateGuess(guess);
});

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess < 1) {
        alert("Please enter a number greater than or equal to 1.");
    } else if (guess > 100) {
        alert("Please enter a number less than or equal to 100.");
    } else {
        preGuesses.push(guess);
        remaining.innerHTML = 10 - numGuess;
        guessesDisplay(guess);
        checkGuess(guess);
        numGuess++;
        if (remaining.innerHTML == 0) {
            messageDisplay(`You lost the game! The number was ${randomeNo}.`);
            endGame();
        }
    }
}

function checkGuess(guess) {
    if (guess === randomeNo) {
        messageDisplay("You won the game!");
        endGame();
    } else if (guess < randomeNo) {
        messageDisplay("The number is higher.");
    } else {
        messageDisplay("The number is lower.");
    }
}

function guessesDisplay(guess) {
    inputGuess.value = '';
    prevGuess.innerHTML += `${guess}, `;
}

function messageDisplay(message) {
    resultMsg.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    inputGuess.setAttribute('disabled', '');
    const p = document.createElement("p");
    p.classList.add('button');
    p.innerHTML = `<h3 id="NewGame">Click to start a new game</h3>`;
    resultMsg.appendChild(p);
    gameStart = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#NewGame');
    newGameButton.addEventListener('click', function (e) {
        randomeNo = Math.round(Math.random() * 100) + 1;
        inputGuess.value = '';
        preGuesses = [];
        numGuess = 1;
        prevGuess.innerHTML = '';
        remaining.innerHTML = `${10 - numGuess}`;
        inputGuess.removeAttribute('disabled');
        resultMsg.innerHTML = '';
        gameStart = true;
    });
}
