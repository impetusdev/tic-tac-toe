// make the model of the tic-tac values

function TicTacBoard() { //TODO: figure out the first principles best method of holding state of the occupriedSquares
    this.occupiedSquares = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'];
    this.xlength = 3;
    this.ylength = 3;
    this.currentTurn = 1;

    this.updateSquare = function(type, x, y) { //FIXME: depending on the grid settings and the jquery associated might need to change the values added to i below
        console.assert(x < 4 && y < 4); //TODO: find out if this was working
        console.assert(x > 0 && y > 0);

        i = (x - 1) + (y - 1) * this.xlength; // get the index based on the input x,y and the grid dimensions
        this.occupiedSquares[i] = type;
    };
    this.incrementTurn = function() {
        this.currentTurn++;
    };
    //TODO: consider making a convert index to x,y values funciton. 
}

// TESTING CODE 
const ticInstance = new TicTacBoard();
// console.log(ticInstance)
// ticInstance.updateSquare('circle', 1, 1);
// console.log(ticInstance.occupiedSquares);