// make the model of the tic-tac values
function TicTacBoard() { //TODO: figure out the first principles best method of holding state of the occupriedSquares
    this.occupiedSquares = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'];
    // this.xlength = 3;
    // this.ylength = 3;
    this.currentTurn = 1;

    // get the i based on the input x,y and the grid dimensions
    this.updateSquare = function(type, x, y) {
        console.assert(x < 4 && y < 4 && x > 0 && y > 0, 'x and y values out of bounds');

        i = (x - 1) + (y - 1) * this.xlength;
        this.occupiedSquares[i] = type;
    };
    this.incrementTurn = function() {
        this.currentTurn++;
    };
    //TODO: consider making a convert index to x,y values funciton. 
}

const ticInstance = new TicTacBoard();