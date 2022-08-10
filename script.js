let computerScore = 0;
let playerScore = 0;
const plays = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return plays[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    return window.prompt("rock, paper, or scissors?").toLowerCase();
}

function recordRoundWinner (playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "rock") {
        console.log("Tie! The computer played rock, too. Your score is " + playerScore + ". The computer's score is " + computerScore + ".");
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        ++computerScore;
        console.log("You lose! Paper beats rock. Your score is " + playerScore + ". The computer's score is " + computerScore + ".");
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        ++playerScore;
        console.log("You win! Rock beats scissors. Your score is " + playerScore + ". The computer's score is " + computerScore + ".");
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        ++playerScore;
        console.log( "You win! Paper beats rock. Your score is " + playerScore + ". The computer's score is " + computerScore + ".");
    } else if (playerChoice == "paper" && computerChoice == "paper") {
        console.log( "Tie! The computer played paper too. Your score is " + playerScore + ". The computer's score is " + computerScore + ".");
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        ++computerScore;
        console.log( "You lose. Scissors beat paper. Your score is " + playerScore + ". The computer's score is " + computerScore + ".");
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        ++computerScore;
        console.log( "You lose! Rock beats scissors. Your score is " + playerScore + ". The computer's score is " + computerScore + ".");
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        ++playerScore;
        console.log( "You win! Scissors beat paper. Your score is " + playerScore + ". The computer's score is " + computerScore + ".");
    } else if (playerChoice == "scissors" && computerChoice == "scissors") {
        console.log( "Tie! The computer played scissors, too. Your score is " + playerScore + ". The computer's score is " + computerScore + ".");
    }
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    recordRoundWinner(playerChoice, computerChoice);
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (playerScore > computerScore) {
        return "You win the game! The score was " + playerScore + " to " + computerScore + ".";
    } else if (computerScore > playerScore) {
        return "You lost the game! The score was " + playerScore + " to " + computerScore + ".";
    } else return "Tie. The score was " + playerScore + " to " + computerScore + ".";
}

console.log(game());