

const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    comp = Math.floor(Math.random() * 3);   

    if (comp === 0) {
        return "scissors";

    } else if (comp === 1) {
        return "rock";

    } else if (comp === 2) {
        return "paper";
    }

}


function getHumanChoice() {
    humanChoice = prompt("Enter your answer here: ");

    if (humanChoice.toLowerCase() === "scissors") {
        return "scissors";

    } else if (humanChoice.toLowerCase() === "rock") {
        return "rock";

    } else if (humanChoice.toLowerCase() === "paper") {
        return "paper";

    } 


}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("Scissors beats paper, human wins!");
        humanScore++;

        } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("Rock beats scissors, computer wins!");
        computerScore++;

        } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("Paper beats rock, human wins!");
        humanScore++;
        
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("Paper beats rock, computer wins!");
        computerScore++;
        
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("Paper beats rock, human wins!");
        humanScore++;
        
        } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("Paper beats rock, computer wins!");
        computerScore++;

        } else {
            
        console.log("It's a tie!");
        }

}



