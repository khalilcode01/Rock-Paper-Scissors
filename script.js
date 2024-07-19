function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let choices = ["Rock", "Paper", "Scissors"]
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
function playRound (humanChoice, computerChoice) {
    if(humanChoice == computerChoice)
        result.textContent = "Tie!"
    else if(humanChoice == "Rock" && computerChoice == "Scissors" || humanChoice == "Scissors" && computerChoice == "Paper" || humanChoice == "Paper" && computerChoice == "Rock"){
        humanScore++;
        result.textContent = "You won your score is " + humanScore;
    }
    else{
        computerScore++;
        result.textContent = "You lost your score is " + humanScore;
    }
}

function playGame() {
    if(humanScore > computerScore)
        console.log("You won!");
    else if(humanScore < computerScore)
        console.log("You lost");
    else if (humanScore == computerScore)
        console.log("It's a tie!");
}
let humanScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll(".btn");
let result = document.querySelector(".result");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent, getComputerChoice());
    });
});