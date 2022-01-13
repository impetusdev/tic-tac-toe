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
const board = [
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty']
];

// const boardClone = [
//     ['empty', 'empty', 'empty'],
//     ['empty', 'empty', 'empty'],
//     ['empty', 'empty', 'empty']
// ].map(el => el); // clones the empty board


function findNextMoves(board, depth, isMax) {
    // const emptySpots = [];

    // for (let x = 0; x < 3; x++) {
    //     for (let y = 0; y < 3; y++) {
    //         if (checkOccupied(x, y)) { emptySpots.push({ x: x, y: y }) };
    //         //TODO: generate a occupiedSquares for each of the layers, that gets copied, then added to 
    //     }
    // }

    //EVALUATE THE BOARD VAL
    // IF WINNER RETURN THE BOARD VAL
    // ELSE FIND NEXT EMPTY SQUARE
    // PLAY IN EMPTY SQUARE
    // PERFORM MINIMAX WITH NEW BOARD STATE & DEPTH + 1
}


// 
function checkOccupied(x, y) {
    return board[y][x] === "empty";
}
module.exports = findNextMoves;

function miniMax(board, depth, isMaximisingPlayer) {

}

// TODO: CONVERT THE FIND WINNER FUNCTION

// for each of the choices immediately infront, evaluate the ways in which the game could go and then sum the win loss count accross these, 
//TODO: figure out how you represent a search tree in code 
// at each node down the tree evaluate if there is a winner, actually you should only evaluate winner when currentTurn > 5. it will save on the bulk of the computation.

//

/*
do a check for victory

*/