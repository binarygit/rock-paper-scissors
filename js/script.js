let humanPoints = 0;
let computerPoints = 0;

const rockBtn = document.querySelectorAll('#rock');
rockBtn.forEach(rock => rock.addEventListener('click', (e) => {
    game('rock');
    e.stopPropagation();
}));

const paperBtn = document.querySelectorAll('#paper');
paperBtn.forEach(paper => paper.addEventListener('click', (e) => {
    game('paper');
    e.stopPropagation();
}));

const scissorsBtn = document.querySelectorAll('#scissors');
scissorsBtn.forEach(scissors => scissors.addEventListener('click', (e) => {
    game('scissors');
    e.stopPropagation();
}));


function game(humanInput) {
    compInput = getComputerInput();
    let matchWinner = playMatch(humanInput, compInput);

    // displays the selected icon
    displayChoice(humanInput, compInput);

    // records points and also handles functions to display them
    pointKeeper(matchWinner);
    hideHeaderAfterFirstMatch();
}


function hideHeaderAfterFirstMatch() {    
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
