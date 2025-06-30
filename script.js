

const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {


}

function getHumanChoice() {
    let answer = prompt("Enter your answer here: ");

    if (answer.toLowerCase() == "scissors") {
        let answer = scissors;

    } else if (answer.toLowerCase() == "rock") {
        let answer = rock;

    } else if (answer.toLowerCase() == "paper") {
        let answer = paper;

    } else {
        let answer = null;

    }

    return answer;

}



function playRound(humanChoice, computerChoice) {

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);