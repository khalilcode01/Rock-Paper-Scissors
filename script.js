function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let choices = ["rock", "paper", "scissors"]
    if(randomNumber == 0)
        return choices[0];
    else if(randomNumber == 1)
        return choices[1];
    else
        return choices[2];
}
function getHumanChoice() {
    let userChoice = prompt("Enter your choice");
    return userChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if(humanChoice == computerChoice)
        console.log("Tie!")
    else if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        console.log("You won your score is " + humanScore);
    }
    else{
        computerScore++;
        console.log("You lost your score is " + humanScore);
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    if(humanScore > computerScore)
        console.log("You won!");
    else if(humanScore < computerScore)
        console.log("You lost");
    else if (humanScore == computerScore)
        console.log("It's a tie!");
}
playGame();