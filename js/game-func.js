function playMatch(playerSelection, computerSelection) {

let playerChoice = playerSelection;
let computerChoice = computerSelection;

    if(playerChoice === 'rock') {

        if(computerChoice === 'rock') {
            return("Rock vs Rock. Tie");
        } else if(computerChoice === 'paper') {
            return("Paper beats rock! Computer wins");
        } else if(computerChoice === 'scissors') {
            return("Rock beats Scissors! Human wins");
        }


    } else if(playerChoice === 'paper') {

        if(computerChoice === 'paper') {
            return("Paper vs Paper. Tie");
        } else if(computerChoice === 'rock') {
            return("Paper beats Rock! Human wins");
        } else if(computerChoice === 'scissors') {
            return("Scissors beats Paper! Computer wins");
        } 


    } else if(playerChoice === 'scissors') {

        if(computerChoice === 'scissors') {
            return("Scissors vs Scissors. Tie");
        } else if(computerChoice === 'rock') {
            return("Rock beats Scissors! Computer wins");
        } else if(computerChoice === 'paper') {
            return("Scissors beat Paper! Human wins");
        } 


    } else {
        return("Don't be naughty! you know that weapon isn't allowed");
    }
}


function getComputerInput() {
    let choices = ["rock", "paper", "scissors"];
        
    return choices[Math.floor((Math.random() * 3))];
}


function pointKeeper(matchWinner) {

    if(matchWinner.indexOf("Human") != -1) {
        ++humanPoints;
        displayMatchWinner(matchWinner);
        displayPoints();
    } else if(matchWinner.indexOf("Computer") != -1) {
        ++computerPoints;
        displayMatchWinner(matchWinner);
        displayPoints();
    } else if(matchWinner.indexOf("Tie") != -1) {
        displayMatchWinner(matchWinner);
    }

    checkGameWinner();
    
}


function checkGameWinner() {
    
    if(humanPoints == 5) {
        displayGameWinner("Human");
        resetPoints();
    } else if(computerPoints == 5) {
        displayGameWinner("Computer")
        resetPoints();
    }

}


function resetPoints() {
    humanPoints = 0;
    computerPoints = 0;
}


