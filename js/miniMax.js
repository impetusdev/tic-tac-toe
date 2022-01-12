// This file is to implement the minimax algorithm 

/*
have a branch algo that produces the values of a branch tree, 
then for the computers turn traverse this tree. and sum the possible actions.   
*/


// Value for loss = -1
// Value for a win = 1
// Value for a draw = 0;  

// generate array of next moves, 


//TODO: refactor the { x: x, y: y, sum } object to be a constructor.



function findNextMoves() {
    const emptySpots = [];
    const board = ticInstance.occupiedSquares.map(identity);
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; x++) {
            if (checkOccupied(x, y)) { emptySpots.push({ x: x, y: y, sum }) };
            //TODO: generate a occupiedSquares for each of the layers, that gets copied, then added to 

        }
    }
}
// 

// for each of the choices immediately infront, evaluate the ways in which the game could go and then sum the win loss count accross these, 
//TODO: figure out how you represent a search tree in code 
// at each node down the tree evaluate if there is a winner, actually you should only evaluate winner when currentTurn > 5. it will save on the bulk of the computation.

//