

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

    if (answer.toLowerCase() === "scissors") {
        let humanChoice = scissors;

    } else if (answer.toLowerCase() === "rock") {
        let humanChoice = rock;

    } else if (answer.toLowerCase() === "paper") {
        let humanChoice = paper;

    } else {
        let humanChoice = null;

    }

    return humanChoice;

}



function playRound(humanChoice, computerChoice) {
    if (humanChoice == scissors && computerChoice == paper) {
        console.log("Scissors beats paper, human wins!")


    } else if (humanChoice == scissors && computerChoice == rock) {
        console.log("Rock beats scissors, computer wins!")

    } else if (humanChoice == paper && computerChoice == rock) {
        console.log("Paper beats rock, human wins!")
        
    } else if (humanChoice == paper && computerChoice == scissors) {
        console.log("Paper beats rock, human wins!")
        
    } else if (humanChoice == rock && computerChoice == scissors) {
        console.log("Paper beats rock, human wins!")
        
    } else if (humanChoice == rock && computerChoice == paper) {
        console.log("Paper beats rock, human wins!")
        
    } else {
        console.log("It's a tie!")
        
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);