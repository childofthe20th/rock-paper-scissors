// Purpose: Create a function called getComputerChoice that randomly returns one of the following string values: "rock, paper, or scissors" //

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Write a function that takes the user choice and returns it using prompt message to get user's input//

function getHumanChoice() {
    let userInput = prompt('Please enter rock, paper, or scissors');
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Invalid input');
    }
}

// Create two new variables named humanScore and computerScore in the global scope. Initialize those variables with the value of 0. //

let humanScore = 0;
let computerScore = 0;

// Write a function that plays a game round by round called playRound that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement. //

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('It is a tie');
    } else if (humanChoice === undefined) {
        console.log('Try again');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
}
  
// The game will play 5 rounds. Write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end. //

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (humanScore < computerScore) {
        console.log('You lose the game!');
    } else if (humanScore === 0 && computerScore === 0) {
        console.log('No winner');
    } else {
        console.log('It is a tie!');
    }
}

playGame();



