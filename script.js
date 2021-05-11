// Function to get human's input
function getInput() {

    return prompt("Enter your choice").toLowerCase();
}

// Function to create computer's choice
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor((Math.random() * 3))];
}

// The algorithm that runs the whole game, getInput() and computerPlay() are fed into in
function gameLogic(playerSelection, computerSelection) {

let playerChoice = playerSelection();
let computerChoice = computerSelection();

// The humanChoice is taken as the choice which our computer will look at first to figure out who won
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
        } else {
            return("Don't be naughty! you know that weapon isn't allowed");
        }


    } else if(playerChoice === 'scissors') {

        if(computerChoice === 'scissors') {
            return("Tie");
        } else if(computerChoice === 'rock') {
            return("Computer wins");
        } else if(computerChoice === 'paper') {
            return("Human wins");
        } else {
            return("Don't be naughty! you know that weapon isn't allowed");
        }

    } else {
        return("Don't be naughty! you know that weapon isn't allowed");
    }

}

function game() {
    let humanCount = 0; //When this and the below var were not initialized i.e = 0, the result returned was NaN
    let computerCount = 0;
    let shortCurcuitAnnouncer;
    let logicStorer;

    for(let i = 0; i<5; i++) {

         logicStorer = gameLogic(getInput, computerPlay);
         console.log(logicStorer);

         // This is the score tracker
        if(logicStorer.indexOf("Human") != -1) {
            ++humanCount;
        } else if(logicStorer.indexOf("Computer") != -1) {
            ++computerCount;
        }

        // if either human or computer gets 3 points, the game is won
        if(humanCount === 3){
          shortCurcuitAnnouncer = console.log(`The score is Human to computer: ${humanCount} to ${computerCount}`)
          console.log("Human Wins");
          return //The code will need to exit the function, if it doesn't, even with game over..the loop will run
        } else if(computerCount === 3){
          console.log(`The score is Human to computer: ${humanCount} to ${computerCount}`);
          console.log("Computer Wins");
          return
        }

      }

// This is what decides who won the game
        if(humanCount > computerCount) {
          console.log(`The score is Human to computer: ${humanCount} to ${computerCount}`);
          console.log("Human Wins");
      } else if(computerCount > humanCount) {
          console.log(`The score is Human to computer: ${humanCount} to ${computerCount}`);
          console.log("Computer Wins");
      } else {
          console.log(`The score is Human to computer: ${humanCount} to ${computerCount}`);
          console.log("It's a tie!");
      }
    }

// Game Initializer
game();
