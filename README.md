May 9, 2021 (11:02)

Just going to code in Js rn, the HTML and CSS part will come later

things to do: 

1. Make function 'computerPlay' which randomly returns rock, paper or scissors.
2. Write func(playerSelection, computerSelection) that plays a round of the game
and then returns a string which delares the winner & loser. 
3. Write a func called game which plays 5 round of game and which keeps score and
reports result at the end. 
4. Use prompt to get input from the user. 

pseudocode: 


create getInput() that gets input from user 
and pass it to tolowercase() which turns the input into lowercase
create computerPlay() in which initialize choices array containing the 3 choices
computerPlay should return a random choice
create gameLogic() that should be fed with computerPlay() and tolowercase()

for Logic: 
create three switch statements that are entered when user selects
1. rock 2. paper 3. scissors
Inside each create three cases in which comp selects
1. rock 2. paper 3. scissors 
Eg: if user selects rock, enter switch 1, go to case one where
comp selects rock: display message "tie"

create game() that is fed gameLogic()
Inside game(), create two var: userCount and compCount
and create a for loop that loops 5 times 
inside which gameLogic() is run
right below gameLogic() (inside loop) create a comparision statement
that checks whether the string "user" was included in the message returned
by gameLogic() or not
if yes, userCount++
if no, compCount--
After loop is run, create a comparision statement which checks for higher count
if userCount > compCount: user wins
else comp wins.
Display winner. 

May 11, 2021 (6:40)

This was actually very intresting. I found quickly that I had overlooked many
things while writing the pseudocode. One of the main things was that you can't
use switch as a comparision statement, like I had planned to. 
The second thing that I learned was that I don't actually read well, if I had 
only read the instructions clearly, I might have saved myself say 3 hours 
worth of trouble. 

May 15, 2021 (8:30)

Need to make a GUI to play the game 
have buttons that you can click and choose either rock, paper or scissors
and display who won using the DOM

to do:

1. remove the game()
2. Create three buttons, one for each selection
3. Add an event listener to the buttons that calls gameLogic() and returns with the correct human input
4. Add a div for displaying results, that uses the DOM to display the results
5. Display the running score, annouce a winner who gets to 5 wins first


pseudo-code:

1. Create buttons in the HTML and a div beneath those html
2. Add an event listener to each buttons, that should pass the corresponding value to the getInput()
3. run gameLogic()

May 17, 2021 (7:00)

The game does run, but I've now to build a "marketable" GUI. I'm not completely sure of how to structure all of it, or style the GUI but let's see. 
 
