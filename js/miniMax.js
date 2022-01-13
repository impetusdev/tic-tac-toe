// This file is to implement the minimax algorithm 
const { expect } = require("@jest/globals");
/*
have a branch algo that produces the values of a branch tree, 
then for the computers turn traverse this tree. and sum the possible actions.   
*/

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
function isNotOccupied(x, y) {
    return board[y][x] === "empty";
}

let currentTurn = 7; //TODO: fix this value you are using it to get all the other values but this is causing the printing of the wrong symbol for player 2

function miniMax(x, y, board, depth, isMax) {
    if (isWinner(x, y, board)) {
        // determine who the winner is and supply points
        const playerNum = currentTurn % 2;
        if (playerNum === 1) {
            return -10;
        } else {
            return +10;
        }
    } else if (currentTurn > 9) {
        return 0;
    }

    if (isMax) {
        best = -100;

        //travere all cells
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                if (isNotOccupied(x, y)) {
                    board[y][x] = currentTurn % 2 === 1 ? 'X' : 'O';
                    currentTurn++;
                    best = Math.max(best, miniMax(x, y, board, depth + 1, !isMax)); //TODO: figure out why we need to flip between
                    // I think the isMax value flips because the player switches so they are each trying to do the optimal move.
                    currentTurn--;
                    board[y][x] = 'empty';
                };
                //TODO: generate a occupiedSquares for each of the layers, that gets copied, then added to 
            }
        }
        return best;
    } else {
        best = 100;

        //travere all cells
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (isNotOccupied(x, y)) {
                    board[y][x] = currentTurn % 2 === 1 ? 'X' : 'O';
                    currentTurn++;
                    best = Math.min(best, miniMax(x, y, board, depth + 1, !isMax)); //TODO: figure out why we need to flip between
                    currentTurn--;
                    board[y][x] = 'empty';
                };
                //TODO: generate a occupiedSquares for each of the layers, that gets copied, then added to 
            }
        }
        return best;
    }
}

// implement the high level function that evaluates all unselected squares, finds their best value
function findBestMove(board) {
    const bestMove = { x: -1, y: -1 }
    let bestVal = -1000;


    // travrse all current empty squares and evaluate their miniMax score. 
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (board[x][y] === 'empty') {
                board[x][y] = currentTurn % 2 === 1 ? 'X' : 'O';
                currentTurn++;

                let moveVal = miniMax(x, y, board, 0, false); //TODO: DOUBLE cHECK THAT FALSE IS THE CORRECT INITIAL VAL

                currentTurn--;
                board[x][y] = 'empty';

                if (moveVal > bestVal) {
                    bestVal = moveVal;
                    bestMove.x = y;
                    bestMove.y = x;
                }
            }
        }
    }

    return bestMove; // returns the coords of best move. 
}
// FIXME: keep this function in here just for testing
// x and y are the coords of last move. 
function isWinner(x, y, board) {
    let slices = [];
    slices.push(
        board[y], // row
        board.map(row => row[x]), // col //TODO: consider putting in the if statement checking if the coords match the diagonal. 
        board.map((row, i) => row[i]), // diag starting top left
        board.map((row, i) => row[2 - i]), // diag starting top right
    );

    return !slices.every(slice => { //return true if one slice is matching, else return false 
        console.log('slice', slice);
        const firstEl = slice[0];
        return firstEl === 'empty' || !slice.every(square => square === firstEl); // this should result with true
    }); // the use of .every here is so that the loop will break when returning false
}

// for each of the choices immediately infront, evaluate the ways in which the game could go and then sum the win loss count accross these, 
// at each node down the tree evaluate if there is a winner, actually you should only evaluate winner when currentTurn > 5. it will save on the bulk of the computation.

module.exports = {
    findNextMoves: findNextMoves,
    isWinner: isWinner,
    findBestMove: findBestMove
};