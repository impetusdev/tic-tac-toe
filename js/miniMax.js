// This file is to implement the minimax algorithm 
/*
have a branch algo that produces the values of a branch tree, 
then for the computers turn traverse this tree. and sum the possible actions.   
*/

function isNotOccupied(x, y, board) {
    return board[y][x] === 'empty';
} //TODO: remove this and change names later. 


// implement the high level function that evaluates all unselected squares, finds their best value
function findBestMove(board, turnEnding) {
    let bestMove = { x: -1, y: -1 };
    let bestVal = -1000;

    // travrse all current empty squares and evaluate their miniMax score. 
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            if (board[y][x] === 'empty') {
                turnEnding++;
                board[y][x] = 'O';

                let moveVal = miniMax(x, y, board, 0, true, turnEnding); //TODO: DOUBLE CHECK THAT FALSE IS THE CORRECT INITIAL VAL

                turnEnding--;
                board[y][x] = 'empty';

                if (moveVal > bestVal) {
                    bestVal = moveVal;
                    bestMove.x = x;
                    bestMove.y = y;
                }
            }
        }
    }

    console.log('the best move is:', bestMove);
    return bestMove; // returns the coords of best move. 
}

function miniMax(x, y, board, depth, isMax, turnEnding) {
    if (isWinner(x, y, board)) {
        // determine who the winner is and supply points
        const playerNum = turnEnding % 2;
        if (playerNum === 1) {
            return -10;
        } else {
            return +10;
        }
    } else if (turnEnding > 8) {
        return 0;
    }

    if (isMax) {
        best = -100;

        //travere all cells
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                if (isNotOccupied(x, y, board)) {
                    turnEnding++;
                    board[y][x] = 'X';
                    best = Math.max(best, miniMax(x, y, board, depth + 1, !isMax, turnEnding));
                    // I think the isMax value flips because the player switches so they are each trying to do the optimal move.
                    turnEnding--;
                    console.log(board);
                    board[y][x] = 'empty';
                }
                //TODO: generate a occupiedSquares for each off the layers, that gets copied, then added to 
            }
        }
        return best;
    } else {
        best = 100;

        //travere all cells
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (isNotOccupied(x, y, board)) {
                    turnEnding++;
                    board[y][x] = 'O';

                    best = Math.min(best, miniMax(x, y, board, depth + 1, !isMax, turnEnding));

                    turnEnding--;
                    console.log(board);
                    board[y][x] = 'empty';
                };
            }
        }
        return best;
    }
}

// for each of the choices immediately infront, evaluate the ways in which the game could go and then sum the win loss count accross these, 
// at each node down the tree evaluate if there is a winner, actually you should only evaluate winner when currentTurn > 5. it will save on the bulk of the computation.

// test if any row/col/diagonal that the clicked element lies on, is a match. 
function isWinner(x, y, board) {
    let slices = [];
    slices.push(
        board[y], // row
        board.map(row => row[x]), // col //TODO: consider putting in the if statement checking if the coords match the diagonal. 
        board.map((row, i) => row[i]), // diag starting top left
        board.map((row, i) => row[2 - i]), // diag starting top right
    );

    return slices.some(slice => { //return true if one slice is matching, else return false 
        const firstEl = slice[0];
        return firstEl !== 'empty' && slice.every(square => square === firstEl);
    }); // the use of .every here is so that the loop will break when returning false
}

// export function only if testing. 
if (typeof module !== 'undefined') {
    exports.isWinner = isWinner;
    exports.findBestMove = findBestMove;
}