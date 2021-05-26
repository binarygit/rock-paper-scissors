const stBtn = document.querySelector('#stBtn');
stBtn.addEventListener('click', startIntro);

function startIntro() {
    stBtn.remove();
    playAudio();
    makeBody();
}


function playAudio() {
    const audio = document.querySelector('#introSong');
    audio.play();
}


async function makeBody() {

    await initializeIntroAnimation();

    const divs = document.querySelectorAll('.div--none');
    console.log(divs);
    
    for(let i=0; i<2; i++){
        divs[i].classList.remove('div--none');
    }

    setTimeout(function () {
        divs[2].classList.remove('div--none');
    }, 3100)

}


function initializeIntroAnimation() {

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