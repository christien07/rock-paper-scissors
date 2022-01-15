function computerPlay() {
    //Random number, num, between 0 and 100:
    let num = Math.floor(Math.random()*100);
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
        let score = 0;
        // i less than 5 - 1 because this game runs for 5 rounds
        // minus one because the prompt is called before the function
        for(let i = 0; i < 5; i++) {
            if(playerSelection === computerSelection) {
                alert("Tie.");
            } else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
                alert("You Lose! Paper beats Rock");
            } else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
                score++;
                alert("You Win! Rock beats Scissors");
            } else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
                score++;
                alert("You Win! Paper beats Rock");
            } else if(playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
                alert("You Lose! Scissors beats Paper");
            } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
                alert("You Lose! Rock beats Scissors");
            } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
                score++;
                alert("You Win! Paper beats Scissors");
            } else {
                alert("Please select a valid option for the game");
            }
        alert("You have won : " + score + " times out of 5");
        prompt("Rock, Paper, or Scissors?");
        }
    }
    console.log(playRPS(playerSelection, computerSelection));