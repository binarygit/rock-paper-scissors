// The algorithm that runs the whole game, getHumanInput() and getComputerInput() are fed into it
function gameLogic(playerSelection, computerSelection) {

let playerChoice = playerSelection;
let computerChoice = computerSelection();

    if(playerChoice === 'rock') {

        if(computerChoice === 'rock') {
            return("Tie");
        } else if(computerChoice === 'paper') {
            return("Computer wins");
        } else if(computerChoice === 'scissors') {
            return("Human wins");
        }


    } else if(playerChoice === 'paper') {

        if(computerChoice === 'paper') {
            return("Tie");
        } else if(computerChoice === 'rock') {
            return("Human wins");
        } else if(computerChoice === 'scissors') {
            return("Computer wins");
        } 


    } else if(playerChoice === 'scissors') {

        if(computerChoice === 'scissors') {
            return("Tie");
        } else if(computerChoice === 'rock') {
            return("Computer wins");
        } else if(computerChoice === 'paper') {
            return("Human wins");
        } 


    } else {
        return("Don't be naughty! you know that weapon isn't allowed");
    }
    

}

function onButtonClick(e) {

    let input = getHumanInput(e);
    let logicStorer = gameLogic(input, getComputerInput);
    pointKeeper(logicStorer);

}

function getHumanInput(e) {

    const clickedBtn = document.querySelector(`button[id="${e.explicitOriginalTarget.id}"]`);
    
    if(!clickedBtn) return;
    else return clickedBtn.id;   

}


function getComputerInput() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor((Math.random() * 3))];
}


function pointKeeper(matchWinner) {

    if(matchWinner.indexOf("Human") != -1) {
        ++humanPoints;
        matchWinnerDisplayer("Human");
    } else if(matchWinner.indexOf("Computer") != -1) {
        ++computerPoints;
        matchWinnerDisplayer("Computer");
    } else if(matchWinner.indexOf("Tie") != -1) {
        matchWinnerDisplayer("Tie");
    }
    
    if(humanPoints == 5) {
        pointsResetter();
        verdictAnnouncer("Human");
    } else if(computerPoints == 5) {
        pointsResetter();
        verdictAnnouncer("Computer")
    }
    
}

function matchWinnerDisplayer(str) {
    let para;
    
    para = document.createElement('p');
    para.textContent = `Point to ${str}`;
    div.appendChild(para);
}

function pointsResetter() {
    humanPoints = 0;
    computerPoints = 0;
}

function verdictAnnouncer(winner) {
    body.remove();

    const html = document.querySelector("html");
    const bodyNew = document.createElement("body");
    const div = document.createElement("div");
    const para = document.createElement("p");

    para.textContent = `${winner} Wins`;

    html.appendChild(bodyNew);
    bodyNew.appendChild(div);
    div.appendChild(para);
};


let div = document.createElement("div");
let body = document.querySelector("body");

body.appendChild(div);

let humanPoints = 0;
let computerPoints = 0;

window.addEventListener('click', onButtonClick);









    



