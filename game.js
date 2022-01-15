console.log("Can you hear me?");

function computerPlay() {
    let num = Math.floor(Math.random()*100);
    console.log(num);

    if(num >= 67) {
        return 'Rock';
    } else if(num < 67 && num > 33) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

let playerSelection = prompt("Rock, Paper, or Scissors?");
let computerSelection = computerPlay();

function playRPS(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        return "Tie."
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        return "You Lose! Paper beats Rock";
    } else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
        return "You Win! Rock beats Scissors";
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
        return "You Win! Paper beats Rock";
    } else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        return "You Lose! Scissors beats Paper";
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        return "You Lose! Rock beats Scissors";
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
        return "You Win! Paper beats Scissors";
    } else {
        return "Please select a valid option for the game";
    }
}

console.log(playRPS(playerSelection, computerSelection));

/* TODO:

    function game() {
        let score = 0;
        for(let i = 0; i < 5; i++) {
            return (playRPS(playerSelection, computerSelection));
        }
    } 

*/