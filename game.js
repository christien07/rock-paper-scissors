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

prompt("Rock, Paper, or Scissors?");

function playRPS(playerSelection, computerSelection) {
    let playerSelection;
    let computerSelection = computerPlay();

    if(playerSelection === computerSelection) {
        return "Tie."
    } else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        return "You Lose! Paper beats Rock";
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return "You Win! Rock beats Scissors";
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        return "You Win! Paper beats Rock";
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return "You Lose! Scissors beats Paper";
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You Lose! Rock beats Scissors';
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return "You Win! Paper beats Scissors";
    } else {
        return "Please select a valid option for the game";
    }
}