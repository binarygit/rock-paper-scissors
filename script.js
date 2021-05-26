let humanPoints = 0;
let computerPoints = 0;

// window.addEventListener('click', onButtonClick);

const stBtn = document.querySelector('#stBtn');
stBtn.addEventListener('click', afterClick);

const rock = document.querySelectorAll('#rock');
console.log(rock);
rock.forEach(rock => rock.addEventListener('click', (e) => {
    game('rock');
    e.stopPropagation();
}));

const paper = document.querySelectorAll('#paper');
paper.forEach(paper => paper.addEventListener('click', (e) => {
    game('paper');
    e.stopPropagation();
}));

const scissors = document.querySelectorAll('#scissors');
scissors.forEach(scissors => scissors.addEventListener('click', (e) => {
    game('scissors');
    e.stopPropagation();
}));


function game(humanInput) {
    compInput = getComputerInput();
    let logicStorer = gameLogic(humanInput, compInput);
    console.log(logicStorer);
    choiceDisplayer(humanInput, compInput);
    pointKeeper(logicStorer);
    headerHide();
}


const playAgn = document.querySelector('#playAgain');

playAgn.addEventListener('click', playAgain);


// function onButtonClick(e) {
//     console.log(e);

//     if(e.explicitOriginalTarget.id == 'stBtn') { 
//         afterClick()
//     }
//     else if(e.explicitOriginalTarget.id == 'playAgain') {
//         playAgain();
//     }
//     else {

//         let humanInput = getHumanInput(e);
//         let compInput = getComputerInput();
//         if(!humanInput){return}
//         // the game runs, even if humanInput returns undefined. (!humanInput) doesn't let that happen

//         else{

//         let logicStorer = gameLogic(humanInput, compInput);
//         choiceDisplayer(humanInput, compInput);
//         pointKeeper(logicStorer);
//         headerHide();
        
//          }
        
//     }
    
// }

function playAgain() {

    const divs = document.querySelectorAll('div');
    
    for(let i=0; i<divs.length; i++){
        if(divs[i].classList.contains('div--none')){
            divs[i].classList.remove('div--none');
        } else {
            divs[i].classList.add('div--none');
        }
    }

    const body = document.querySelector('body');

    body.classList.remove('body--play-again');

    const audio = document.querySelector('#gameFinSong');
    audio.pause();
    audio.currentTime = 0;

    const header = document.querySelector('#header');
    const scoreBoard = document.querySelector('#scoreBoard')

    header.classList.remove('header--fade-in-animation');
    header.classList.remove('header--fade-out-animation');
    header.classList.add('header--play-again-black');
    scoreBoard.classList.remove('score-board--animate');

    const h3 = document.querySelector('#scoreBoardH3');

    h3.textContent = "1st to 5 points wins";
    h3.classList.add('score-board__h3--play-again-white');

    let humanP = document.querySelector('#humanP');
    let compP = document.querySelector('#compP');

    humanP.textContent = 'Human: 0';
    compP.textContent = 'Computer: 0';

}
 
// for the intro

function afterClick() {
    stBtn.remove();
    playAudio();
    makeBody();
}


function playAudio() {
    const audio = document.querySelector('#introSong');
    audio.play();
}


async function makeBody() {

    await introAnimation();

    const divs = document.querySelectorAll('.div--none');
    console.log(divs);
    
    for(let i=0; i<2; i++){
        divs[i].classList.remove('div--none');
    }

    setTimeout(function () {
        divs[2].classList.remove('div--none');
    }, 3100)

}


function introAnimation() {

    const div = document.querySelector("#st-btn-replacer")
    div.classList.add("st-btn-replacer")

    setTimeout(function(){
        div.classList.remove("st-btn-replacer")
        div.classList.add("transition-to-big-box")
    }, 5600);
    
    setTimeout(function(){
        div.classList.add("transition-big-box-swell")
    }, 7000);

    return new Promise(resolve => {
        setTimeout(function() {
        div.remove();
        const body = document.querySelector("body");
        body.classList.remove('body__before-intro');
        body.classList.add('body__after-intro')
        resolve('resolved');
    }, 10300);
});

}


// Game running Functions
// The algorithm that runs the whole game, getHumanInput() and getComputerInput() are fed into it
function gameLogic(playerSelection, computerSelection) {

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


function getHumanInput(e) {

    const clickedBtn = document.querySelector(`button[id="${e.explicitOriginalTarget.id}"]`);
    
    if(!clickedBtn) return;
    else return clickedBtn.id;   

}

function getComputerInput() {
    let choices = ["rock", "paper", "scissors"];
     
    return choices[Math.floor((Math.random() * 3))];
}


function choiceDisplayer(hChoice, cChoice) {
    let humanSelection = document.getElementById('humanSelection');
    let compSelection = document.getElementById('compSelection');

    if(hChoice == 'rock') {
        humanSelection.className = '';
        humanSelection.classList.add('far' ,'fa-hand-rock' ,'score-board__font-awe', 'score-board__font-awe-human--imperial')
    } else if(hChoice == 'paper') {
        humanSelection.className = '';
        humanSelection.classList.add('far' ,'fa-hand-paper' ,'score-board__font-awe', 'score-board__font-awe-human--cardinal')
    } else if(hChoice == 'scissors') {
        humanSelection.className = '';
        humanSelection.classList.add('far' ,'fa-hand-scissors' ,'score-board__font-awe', 'score-board__font-awe-human--crimson')
    }

    if(cChoice == 'rock') {
        compSelection.className = '';
        compSelection.classList.add('far' ,'fa-hand-rock' ,'score-board__font-awe', 'score-board__font-awe-comp--marine')
    } else if(cChoice == 'paper') {
        compSelection.className = '';
        compSelection.classList.add('far' ,'fa-hand-paper' ,'score-board__font-awe', 'score-board__font-awe-comp--savory')
    } else if(cChoice == 'scissors') {
        compSelection.className = '';
        compSelection.classList.add('far' ,'fa-hand-scissors' ,'score-board__font-awe', 'score-board__font-awe-comp--egypt')
    }
}

function pointKeeper(matchWinner) {

    if(matchWinner.indexOf("Human") != -1) {
        ++humanPoints;
        matchWinnerDisplayer(matchWinner);
        pointDisplayer();
    } else if(matchWinner.indexOf("Computer") != -1) {
        ++computerPoints;
        matchWinnerDisplayer(matchWinner);
        pointDisplayer();
    } else if(matchWinner.indexOf("Tie") != -1) {
        matchWinnerDisplayer(matchWinner);
    }

    
    
    if(humanPoints == 5) {
        verdictAnnouncer("Human");
        pointsResetter();
    } else if(computerPoints == 5) {
        verdictAnnouncer("Computer")
        pointsResetter();
    }
    
}


function pointDisplayer() {
    let humanP = document.querySelector('#humanP');
    let compP = document.querySelector('#compP');
    humanP.classList.add('score-board__human-p--red');
    compP.classList.add('score-board__comp-p--blue')

    humanP.textContent = `Human: ${humanPoints}`;
    compP.textContent = `Computer: ${computerPoints}`;
}

function matchWinnerDisplayer(str) {
    let scoreBoard = document.querySelector('#scoreBoardH3')

    if(scoreBoard.classList.contains('score-board__h3--play-again-white')){
        scoreBoard.classList.remove('score-board__h3--play-again-white');
    }
    
    if(str.indexOf('Human') > -1) {
        scoreBoard.classList.remove('score-board__h3--blue');
        scoreBoard.classList.add('score-board__h3--red');
        scoreBoard.textContent = `${str}`;

    } else if(str.indexOf('Computer') > -1) {
        scoreBoard.classList.remove('score-board__h3--red');
        scoreBoard.classList.add('score-board__h3--blue');
        scoreBoard.textContent = `${str}`;

    } else {
        scoreBoard.classList.remove('score-board__h3--red', 'score-board__h3--blue')
        scoreBoard.textContent = `${str}`;
    }
    
}


function verdictAnnouncer(winner) {
    const body = document.querySelector('body');

    body.classList.add('body--play-again');

    const introAudio = document.querySelector('#introSong');
    if(introAudio.play()) {
        introAudio.pause();
        introAudio.currentTime = 0;
    }

    const audio = document.querySelector('#gameFinSong');
    audio.play();

    const p = document.querySelector('#finalScoreDisplayer');
    p.textContent = `The score was ${humanPoints} to ${computerPoints} : human to computer.`;

    const winnerh1 = document.querySelector('#gameWinnerh1');

    if(winner == 'Computer') {
        winnerh1.textContent = "I'm sorry, but you've lost.";
        
    } else {
        winnerh1.textContent = "Congratulations, You won the game";

    }

    const divs = document.querySelectorAll('div');

    for(let i=0; i<divs.length; i++){
        if(divs[i].classList.contains('div--none')){
            divs[i].classList.remove('div--none');
        } else {
            divs[i].classList.add('div--none');
        }
    }

}


function pointsResetter() {
    humanPoints = 0;
    computerPoints = 0;
}


function headerHide() {    
    const header = document.querySelector('#header');
   
    // without the (!header), shows error once header becomes null
    if(header){
        if(header.classList.contains('header--fade-in-animation')){
            header.classList.remove('header--fade-in-animation');
            header.classList.add('header--fade-out-animation');
        } 
    }
    else return;
    
}

