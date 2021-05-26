function displayChoice(hChoice, cChoice) {
    let humanSelection = document.getElementById('humanSelection');
    let compSelection = document.getElementById('compSelection');

    // displays the selected icon: rock, paper or scissors; for human
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

    // displays the selected icon: rock, paper or scissors; for computer
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


function displayPoints() {
    let humanP = document.querySelector('#humanP');
    let compP = document.querySelector('#compP');
    humanP.classList.add('score-board__human-p--red');
    compP.classList.add('score-board__comp-p--blue')

    humanP.textContent = `Human: ${humanPoints}`;
    compP.textContent = `Computer: ${computerPoints}`;
}


// changes the h3 tag in score-board to display match winner
function displayMatchWinner(MatchWinner) {
    let scoreBoard = document.querySelector('#scoreBoardH3')

    if(scoreBoard.classList.contains('score-board__h3--play-again-white')){
        scoreBoard.classList.remove('score-board__h3--play-again-white');
    }
    
    if(MatchWinner.indexOf('Human') > -1) {
        scoreBoard.classList.remove('score-board__h3--blue');
        scoreBoard.classList.add('score-board__h3--red');
        scoreBoard.textContent = `${MatchWinner}`;

    } else if(MatchWinner.indexOf('Computer') > -1) {
        scoreBoard.classList.remove('score-board__h3--red');
        scoreBoard.classList.add('score-board__h3--blue');
        scoreBoard.textContent = `${MatchWinner}`;

    } else {
        scoreBoard.classList.remove('score-board__h3--red', 'score-board__h3--blue')
        scoreBoard.textContent = `${MatchWinner}`;
    }
    
}


function displayGameWinner(winner) {
    
    //adding new properties to body to make play-again layout 
    const body = document.querySelector('body');

    body.classList.add('body--play-again');

    // checking if the intro audio is playing, if it is, then stop and play outro
    const introAudio = document.querySelector('#introSong');
    if(introAudio.play()) {
        introAudio.pause();
        introAudio.currentTime = 0;
    }
    
    const outroAudio = document.querySelector('#gameFinSong');
    outroAudio.play();
    
    // displaying the final score and game winner
    const p = document.querySelector('#finalScoreDisplayer');
    p.textContent = `The score was ${humanPoints} to ${computerPoints} : human to computer.`;

    const winnerh1 = document.querySelector('#gameWinnerh1');

    if(winner == 'Computer') {
        winnerh1.textContent = "I'm sorry, but you've lost.";
        
    } else {
        winnerh1.textContent = "Congratulations, You won the game";

    }

    // hiding the divs that made game-play and showing the divs that will display winner message and play again buttons
    const divs = document.querySelectorAll('div');

    for(let i=0; i<divs.length; i++){
        if(divs[i].classList.contains('div--none')){
            divs[i].classList.remove('div--none');
        } else {
            divs[i].classList.add('div--none');
        }
    }

}
