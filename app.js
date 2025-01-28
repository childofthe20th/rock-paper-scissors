// Purpose: Create a function that randomly returns one of the following string values: "rock, paper, or scissors" //

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

console.log(getComputerChoice());

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

console.log(getHumanChoice());



