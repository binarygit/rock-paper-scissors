const playAgnBtn = document.querySelector('#playAgain');

playAgnBtn.addEventListener('click', playAgain);

function playAgain() {

    // Hide the divs that displayed game winner and unhide the game-play divs: bring back buttons, score-board etc
    const divs = document.querySelectorAll('div');
    
    for(let i=0; i<divs.length; i++){
        if(divs[i].classList.contains('div--none')){
            divs[i].classList.remove('div--none');
        } else {
            divs[i].classList.add('div--none');
        }
    }

    // remove the properties used to create match-winner window
    const body = document.querySelector('body');

    body.classList.remove('body--play-again');

    // stop outro audio
    const audio = document.querySelector('#gameFinSong');
    audio.pause();
    audio.currentTime = 0;

    // remove the animations in header and score-board when site first loads i.e after intro
    const header = document.querySelector('#header');
    const scoreBoard = document.querySelector('#scoreBoard')

    header.classList.remove('header--fade-in-animation');
    header.classList.remove('header--fade-out-animation');
    header.classList.add('header--play-again-black');
    scoreBoard.classList.remove('score-board--animate');

    // set score-board h3 to neutral dialog and make it white
    const h3 = document.querySelector('#scoreBoardH3');

    h3.textContent = "1st to 5 points wins";
    h3.classList.add('score-board__h3--play-again-white');

    // set the para that display score to 0  
    let humanP = document.querySelector('#humanP');
    let compP = document.querySelector('#compP');

    humanP.textContent = 'Human: 0';
    compP.textContent = 'Computer: 0';

}