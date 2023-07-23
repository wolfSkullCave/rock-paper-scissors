//console.log('hello world');
/*
function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/
function getComputerChoice(){
    // randomly return rock, paper or scissors
    
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

console.log(getComputerChoice());