function game(){
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let result;

    for (let i = 0; i < 5; i++){
        // get players inputs
        playerSelection = prompt("Please select rock, paper or scissors: ");

        computerSelection = getComputerChoice();


        // select a winner
        result = playRound(playerSelection, computerSelection);
        if (result == 'win') {
            playerScore++;
        }
        else if (result == 'lose'){
            computerScore++;
        }

        console.log('ROUND ' + i);
        console.log('player: ' + playerSelection);
        console.log('computer: ' + computerSelection);
        console.log('player: ' + playerScore);
        console.log('computer: ' + computerScore);
        console.log('------------');

    }

    // output score
    console.log(displayResult(playerScore, computerScore));
    
}

// playRound()
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

    return result;

  }

// getComputerChoice()
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

// displayResult()
function displayResult(playerScore, computerScore) {

    if (playerScore > computerScore){
        return 'You Win! ' + playerScore + '/' + computerScore;
    }
    else if (playerScore < computerScore){
        return 'You Lose! ' + playerScore + '/' + computerScore;
    }
    else if (playerScore == computerScore){
        return 'Draw! ' + playerScore + '/' + computerScore;
    }
    else {
        return playerScore + '/' + computerScore;
    }
}

game();