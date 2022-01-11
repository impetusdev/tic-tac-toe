Technical Requirements
Your app must:

✔  Render a game board in the browser 
✔  Switch turns between X and O (or whichever markers you select); your game should prevent users from playing a turn into a square that is already occupied 
✔  Visually display which side won if a player gets three in a row; or show a draw/"cat’s game" if neither wins 
✔  Include separate HTML / CSS / JavaScript files 
✔  Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles 
✔  Use Javascript with jQuery (or vanilla DOM methods if you really prefer) for DOM manipulation
    Deploy your game online, where the rest of the world can access it
✔  Use semantic markup for HTML and CSS (adhere to best practices)


-----------------------------------------------
Bonus
These are for extra credit! Don't focus on these until you've hit the core requirements.

TRY    Keep track of multiple game rounds with a win counter

Allow players to customize their tokens (X, O, name, picture, etc)

Get inventive with your styling, e.g. use hover effects or animations to spiff things up

Make your game layout responsive so it works on differently-sized screens by exploring CSS Media Queries, CSS variables, and CSS layout mechanisms like Flexbox or Grid

TRY    Use LocalStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity

TRY    Support custom board sizes: default is 3x3 but you could allow users to choose a larger board

Support networked multiplayer: https://www.firebase.com/ has a nice quickstart guide

TRY    Create an AI opponent: teach Javascript to play an unbeatable game against you

Start by implementing a few simple rules which can be easily checked and are always good moves, such as "always take the center square if it's available" - you can google these rules for yourself
You can build in as many AI player rules as you like but you'll quickly end up with a longwinded list of if-else-if statements. To make a truly unbeatable AI opponent you'll need to look into implementing a recursive full-game-tree algorithm like MiniMax - for advanced/bold students only!
Start again by implementing a totally different game: Try Checkers, or Battleships.... or Chess (if you're feeling very brave)

Make a Vue.js version of your game, instead of jQuery, and compare the two...


-----------------------------------------------

Get a basic grid showing in html, don't bother with complicated styling or the like.


TICK-TAC BLOCKS (grid)
Script logic: Make the object instance that has 9 elements representing the value of the grid, 

Whenever a change to the array occurs update the specific grid HTML aswell. 

PLACE A CROSS OR CIRCLE
allow for the alternating placement of the cross / circle which updates the placedArr. 

SEARCH FOR WINNING MOVE
A checkIfWinner function needs to look at if any of the rows/columns/diagonals are filled.
if so declare winner. 

DOMUPDATER

