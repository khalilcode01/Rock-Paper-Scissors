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
function playRound (humanChoice, computerChoice) {
    roundCount++;
    score.textContent = roundCount + " | 5";
    if(roundCount >= 5){
        playGame();
        return 0;
    }
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
        result.textContent = "You won!";
    else if(humanScore < computerScore)
        result.textContent = "You lost";
    else if (humanScore == computerScore)
        result.textContent = "It's a tie!";
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
}
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let buttons = document.querySelectorAll(".btn");
let result = document.querySelector(".result");
let score = document.querySelector(".score");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent, getComputerChoice());
    });
});