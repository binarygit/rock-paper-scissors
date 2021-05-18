const btn = document.querySelector("button");
startBtn.addEventListener('click', afterClick);

function playAudio() {
    const audio = document.querySelector('audio');
    audio.play();
}

function timeOuts1() {

    const div = document.querySelector("#startBtnReplacer")
    div.classList.add("startBtnReplacerStyle")

    setTimeout(function(){
        div.classList.remove("startBtnReplacerStyle")
        div.classList.add("transitionStop-1")
    }, 5600)
    
    setTimeout(function(){
        div.classList.add("transition-2")
    }, 7000)

    setTimeout(function() {
        div.remove();
        const body = document.querySelector("body");
        body.style.backgroundColor= "black";
        return true;
    }, 10300)

}

function afterClick() {
    btn.remove();

    playAudio();
    timeOuts1();
    
    
}

function makeBody() {

    const headerDiv = document.querySelector("#header-div");
    const buttonsDiv = document.querySelector("#buttonsDiv");
    const buttons = document.querySelectorAll('button');

    for(let i=0; i<buttons.length; i++) {

        buttons[i].classList.remove('none');
    }

    console.log(buttons);

}

