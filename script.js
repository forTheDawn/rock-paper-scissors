

const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    let comp = Math.floor(Math.random() * 3);   

    if (comp = 0) {
        let computer = scissors;

    } else if (comp = 1) {
        let computer = rock;

    } else if (comp = 2) {
        let computer = paper;
    }
    return comp;

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
    if (humanchoice == scissors && computerChoice == paper) {
        console.log("Scissors beats paper, human wins!")
        

    } else if () {

    } else if () {
        
    } else if () {
        
    } else if () {
        
    } else if () {
        
    } else {
        
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);