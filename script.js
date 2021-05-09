function getInput() {

    return prompt("Enter your choice").toLowerCase();
}

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor((Math.random() * 3))];
}

function gameLogic(playerSelection, computerSelection) {

    if(playerSelection === 'rock') {
        
        if(computerSelection === 'rock') {
            return("Tie");
        } else if(computerSelection === 'paper') {
            return("Computer wins");
        } else if(computerSelection === 'scissors') {
            return("Human wins");
        }


    } else if(playerSelection === 'paper') {
        
        if(computerSelection === 'paper') {
            return("Tie");
        } else if(computerSelection === 'rock') {
            return("Human wins");
        } else if(computerSelection === 'scissors') {
            return("Computer wins");
        } else {
            return("Don't be naughty! you know that weapon isn't allowed");
        }


    } else if(playerSelection === 'scissors') {

        if(computerSelection === 'scissors') {
            return("Tie");
        } else if(computerSelection === 'rock') {
            return("Computer wins");
        } else if(computerSelection === 'paper') {
            return("Human wins");
        } else {
            return("Don't be naughty! you know that weapon isn't allowed");
        }

    } else {
        return("Don't be naughty! you know that weapon isn't allowed");
    }

}

function initializer() {
    game(gameLogic(getInput, computerPlay));
}


function toWork(logi) {


}
for(let i=0; i<3; i++){
    let ab = gameLogic(getInput(), computerPlay());
}


function game(logic) {
    let humanCount;
    let computerCount;

    for(let i = 0; i<5; i++) {
        let logicStorer = logic;
        console.log(logicStorer);

        if(logicStorer.indexOf("Human")) {
            ++humanCount;
        } else if(logicStorer.indexOf("Computer")) {
            ++computerCount;
        }
    }

    if(humanCount > computerCount) {
        console.log("Human Wins");
    } else if(computerCount > humanCount) {
        console.log("Computer Wins");
    } else {
        console.log("It's a tie!");
    }
}

// let a = 8;
// let b =5;

// let z = function() {
//     switch(a == 2) {
//         case (b == 5):
//             console.log("yo")
//             break;
//     }
//     console.log("shit");
// }

// console.log(z());

// let a = function() {
//     return("hey");
// };


// let b = function(para) {
    
    
//     for(let i=0; i<3; i++) {
//         let aa =para();
//         console.log(i);
//         console.log(aa.length);
//     }

// }

// b(a);


