function game() {
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let result;

    // get players inputs
    playerSelection = prompt("Please select rock, paper or scissors: ");

    computerSelection = getComputerChoice();


    // select a winner
    result = playRound(playerSelection, computerSelection);
    if (result == 'win') {
        playerScore++;
    }
    else if (result == 'lose') {
        computerScore++;
    }

    console.log('player: ' + playerSelection);
    console.log('computer: ' + computerSelection);
    console.log('player: ' + playerScore);
    console.log('computer: ' + computerScore);
    console.log('------------');



    // output score
    console.log(displayResult(playerScore, computerScore));

}

// playRound()
function playRound(playerSelection) {
    // select a winner

    //playerSelection = playerSelection.toLower();
    let computerSelection = getComputerChoice();

    let result;

    // winning conditons
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = 'win';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = 'win';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = 'win';
    }

    // losing conditions
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = 'lose';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = 'lose';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = 'lose';
    }

    // draw conditions
    else {
        result = 'draw';
    }

    //console.log(result);
    return result;

}

// getComputerChoice()
function getComputerChoice() {
    // randomly return rock, paper or scissors

    // generate a random number between 1 - 3

    let min = 1;
    let max = 3;

    let choice = Math.floor(Math.random() * (max - min + 1)) + min;

    //return choice;

    switch (choice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        default:
            return 'error: choice variable';

    }
}

// displayResult()
function displayResult(result, score) {

    if (result === 'win') {
        score++;
    }

    if (score >= 5) {
        content.textContent = `You win! ${score}/5`;
        container.appendChild(content);
        score = 0;
    } else {
        content.textContent = `Score: ${score}/5 - ${result}`;
        container.appendChild(content);
    }

    return score;
}

function testFunction() {
    console.log('test');
}

function buttonEvent(button, result, score) {
    result = playRound(button);
    score = displayResult(result, score);

    console.log(button, result);
    return score;
}

const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-scissors');

let score = 0;
let result;
let score1, score2 = 0;
let player1, player2;

// onclick the buttons set player selection to xxxx
rock.addEventListener('click', () => {
    let value = rock.value;
    score = buttonEvent(value, result, score);
});

paper.onclick = () => {
    let value = paper.value;
    score = buttonEvent(value, result, score);

};

scissors.addEventListener('click', () => {
    let value = scissors.value;
    score = buttonEvent(value, result, score);

});

// display score
const container = document.querySelector('#container');

const content = document.createElement('div');
content.textContent = 'Score: ' + score;

container.appendChild(content);

