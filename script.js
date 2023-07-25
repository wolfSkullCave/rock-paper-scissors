
function playRound(playerSelection, computerSelection) {
    // select a winner

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

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

    // display result
    switch (result){
        case 'win':
            //return 'You Win! ${playerSelection} beats ${computerSelection}';
            return 'You Win! ' + playerSelection.toUpperCase() + ' beats ' + computerSelection.toUpperCase();
            break;
        case 'lose':
            return 'You Lose! ' + computerSelection.toUpperCase() + ' beats ' + playerSelection.toUpperCase();
            break;
        case 'draw':
            return 'Draw ' + playerSelection.toUpperCase() + ' ties with ' + computerSelection.toUpperCase();
            break;
        default:
            return 'error: cannot determin a winner';
            break;
    }

  }
   
// player selects either rock, paper or scissors
const playerSelection = "rock";

// computer selects either rock, paper or scissors
const computerSelection = getComputerChoice();

// select a winner
console.log(playRound(playerSelection, computerSelection));


function getComputerChoice(){
    // randomly return rock, paper or scissors
    
    // generate a random number between 1 - 3

    let min = 1;
    let max = 3;

    let choice = Math.floor(Math.random() * (max - min + 1) ) + min;
    
    //return choice;

    switch(choice){
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
        default:
            return 'error: choice variable';

    }
}

