const btn = document.querySelector("#stBtn");
btn.addEventListener('click', afterClick);

function playAudio() {
    const audio = document.querySelector('audio');
    audio.play();
}

function timeOuts1() {

    btn.classList.remove("st-btn")
    btn.classList.add("st-btn--on-click-change")

    setTimeout(function(){
        btn.classList.remove("st-btn--on-click-change")
        btn.classList.add("st-btn--transition-stop-1")
    }, 5600)
    
    setTimeout(function(){
        btn.classList.add("st-btn--transition-closing-act")
    }, 7000)

    return new Promise(resolve => {
        setTimeout(function() {
        btn.remove();
        const body = document.querySelector("body");
        body.classList.remove('body--at-intro');
        body.classList.add("body--after-intro")
        resolve('resolved');
    }, 10300)
});

}

function afterClick() {

    playAudio();
    makeBody();
    
}

function makeScoreBoard() {
    const scoreBoard = document.querySelector("#scoreBoard")
    const h3 = document.createElement('h3');

    scoreBoard.classList.add("score-board");
    h3.classList.add("score-board__h3");
    
    h3.textContent = "Score";
    scoreBoard.appendChild(h3);

    const humanBlock = document.createElement('div');
    const pHuman = document.createElement('p');
    const iHuman = document.createElement('i');
    
    pHuman.textContent = "Human: 0"

    humanBlock.classList.add('score-board__human-block');
    iHuman.classList.add('far', 'fa-hand-rock', 'score-board__font-awe')

    humanBlock.appendChild(pHuman);
    humanBlock.appendChild(iHuman);
    scoreBoard.appendChild(humanBlock);

    const compBlock = document.createElement('div');
    const pComp = document.createElement('p');
    const iComp = document.createElement('i');

    pComp.textContent = "Computer: 0"

    compBlock.classList.add('score-board__comp-block');
    iComp.classList.add('far', 'fa-hand-rock', 'score-board__font-awe')

    compBlock.appendChild(pComp);
    compBlock.appendChild(iComp);
    scoreBoard.appendChild(compBlock);

}

async function makeBody() {

    await timeOuts1();
    const header = document.querySelector("#headerr");
    const p = document.createElement('p');
    const h1 = document.createElement('h1');

    p.textContent = "Welcome to"
    h1. textContent = "Rock Paper Scissor"

    header.classList.add('header')
    p.classList.add('header__p');
    h1.classList.add('header__h1');

    header.appendChild(p);
    header.appendChild(h1);

    makeScoreBoard();
}

