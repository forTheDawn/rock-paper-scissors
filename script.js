

const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);   

    if (computerChoice === 0) {
        computerChoice = scissors;

    } else if (comp === 1) {
        computerChoice = rock;

    } else if (comp === 2) {
        computerChoice = paper;
    }
    return computerChoice;

}


function getHumanChoice() {
    humanChoice = prompt("Enter your answer here: ");

    if (humanChoice.toLowerCase() === "scissors") {
        humanChoice = scissors;
        console.log("You picked scissors!")

    } else if (humanChoice.toLowerCase() === "rock") {
        humanChoice = rock;
        console.log("You picked rock!")

    } else if (humanChoice.toLowerCase() === "paper") {
        humanChoice = paper;
        console.log("You picked paper!")

    } 
    return humanChoice;

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playGame () {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("Scissors beats paper, human wins!")
        humanScore++;

        } else if (humanChoice == scissors && computerChoice == rock) {
        console.log("Rock beats scissors, computer wins!")
        computerScore++;

        } else if (humanChoice == paper && computerChoice == rock) {
        console.log("Paper beats rock, human wins!")
        humanScore++;
        
        } else if (humanChoice == paper && computerChoice == scissors) {
        console.log("Paper beats rock, computer wins!")
        computerScore++;
        
        } else if (humanChoice == rock && computerChoice == scissors) {
        console.log("Paper beats rock, human wins!")
        humanScore++;
        
        } else if (humanChoice == rock && computerChoice == paper) {
        console.log("Paper beats rock, computer wins!")
        computerScore++;
        } else {
        console.log("It's a tie!")
        }
}
                for (var i = 0; i = 5; i++) playRound(humanChoice, computerChoice);

}



playGame();