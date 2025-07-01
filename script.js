

const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);   

    if (computerChoice === 0) {
        computerChoice = "scissors";

    } else if (comp === 1) {
        computerChoice = "rock";

    } else if (comp === 2) {
        computerChoice = "paper";
    }
    return computerChoice;

}


function getHumanChoice() {
    humanChoice = prompt("Enter your answer here: ");

    if (answer.toLowerCase() === "scissors") {
        humanChoice = "scissors";

    } else if (answer.toLowerCase() === "rock") {
        humanChoice = "rock";

    } else if (answer.toLowerCase() === "paper") {
        humanChoice = "paper";

    } else {
        humanChoice = null;

    }

    return humanChoice;

}


function playGame () {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("Scissors beats paper, human wins!")
        humanScore++;

        } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("Rock beats scissors, computer wins!")
        computerScore++;

        } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("Paper beats rock, human wins!")
        humanScore++;
        
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("Paper beats rock, computer wins!")
        computerScore++;
        
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("Paper beats rock, human wins!")
        humanScore++;
        
        } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("Paper beats rock, computer wins!")
        computerScore++;
        } else {
        console.log("It's a tie!")
        }
}
                for (var i = 0; i = 5; i++) playRound(humanChoice, computerChoice);

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);