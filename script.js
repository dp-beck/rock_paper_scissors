let computerScore = 0;
let playerScore = 0;
const plays = ["rock", "paper", "scissors"];
const results = document.querySelector('#results');
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

function updateScoreDisplay() {
    playerScoreDisplay.textContent = '';
    computerScoreDisplay.textContent = '';
    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    computerScoreDisplay.textContent = " Computer Score: " + computerScore;
}

function getComputerChoice() {
    return plays[Math.floor(Math.random() * 3)];
}

function recordRoundWinner (playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "rock") {
        results.textContent = "Tie! The computer played rock, too.";
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        ++computerScore;
        results.textContent = "You lose! Paper beats rock.";  
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        ++playerScore;
        results.textContent = "You win! Rock beats scissors."; 
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        ++playerScore;
        results.textContent = "You win! Paper beats rock."; 
    } else if (playerChoice == "paper" && computerChoice == "paper") {
        results.textContent = "Tie! The computer played paper too.";
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        ++computerScore;
        results.textContent = "You lose. Scissors beat paper."; 
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        ++computerScore;
        results.textContent = "You lose! Rock beats scissors."; 
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        ++playerScore;
        results.textContent = "You win! Scissors beat paper."; 
    } else if (playerChoice == "scissors" && computerChoice == "scissors") {
        results.textContent = "Tie! The computer played scissors, too."; 
    }

}

function playRound(playerChoice) {
    results.textContent = '';
    let computerChoice = getComputerChoice();
    recordRoundWinner(playerChoice, computerChoice);
    updateScoreDisplay()
    if ((playerScore === 5) || (computerScore === 5)) {
        results.textContent = endGame();
    }
}

function endGame() {
    buttons.forEach((button) => {
        button.disabled = true;
        }   
    );
    
    if (playerScore > computerScore) {
        return "You win the game! The score was " + playerScore + " to " + computerScore + ".";
    } else {
        return "You lost the game! The score was " + playerScore + " to " + computerScore + ".";
    }
}
