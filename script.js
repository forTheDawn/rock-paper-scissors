

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

        if (humanChoice === computerChoice) {
            console.log(`Tie game, Comp:${computerScore}  Human:${humanScore}`)
        }

        else if ((humanChoice == "scissors" && computerChoice == "paper") || 
                    (humanChoice == "paper" && computerChoice == "rock") || 
                        (humanChoice == "rock" && computerChoice == "scissors")) {
        console.log(`Human win, Comp:${computerScore}  Human:${humanScore}`);
        humanScore++;

        } 

         else {
        console.log(`Computer win, Comp:${computerScore}  Human:${humanScore}`);
        computerScore++;

        }

}

        function playGame() {
            for (let i = 1, 1 = 5, i++) {
                let humanChoice = getHumanChoice();
                let computerChoice = getComputerChoice();
                

                playRound(humanChoice, computerChoice);
            }
        }





