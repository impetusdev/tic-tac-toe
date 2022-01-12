$(function() {
    const $allGridSquares = $('.grid-item');
    const $winner = $('#winner');
    // assign the jquery Data values to each grid square element
    $allGridSquares.each(function(i) {
        const { x, y } = convertTo2DCoord(i);
        $(this).data({ x: x, y: y, i: i }); // these x y values can be used in occupiedSquares
    });

    // setup click event for all grid squares. 
    $allGridSquares.on('click', function() {
        const $square = $(this);
        const x = $square.data('x');
        const y = $square.data('y');
        gridClick();

        if (isWinner()) {
            const currentPlayer = ticInstance.currentTurn % 2 === 0 ? 1 : 2;
            $winner.text(`Player ${currentPlayer} has won!`);

            $allGridSquares.unbind();
        } else if (ticInstance.currentTurn > 9) {
            alert('No one has won :(');

            $allGridSquares.unbind();
        }

        function gridClick() {
            //TODO: Implement a mode where in you check what the current ticInstance.playingComp and then generate the computer playing from there.  
            const symbol = ticInstance.currentTurn % 2 === 1 ? 'X' : 'O';

            if (ticInstance.occupiedSquares[y][x] === "empty") { //TODO: double check if the order of x and y is right. 
                $square.text(symbol); // Updates DOM 
                ticInstance.occupiedSquares[y][x] = symbol; // Updates Model;
                ticInstance.incrementTurn();

            } else {
                alert('that square is occupied, please choose again');
            }
        }

        function isWinner() {
            // check all the slices related to that one, 
            // check the row with the given y value

            //get all appropriate slices. 
            const currentRow = ticInstance.occupiedSquares[y]; //TODO: check if this needs the return statement
            const currentCol = ticInstance.occupiedSquares.map(row => row[x]);
            const currentDiag1 = ticInstance.occupiedSquares.map((row, i) => row[i]);
            const currentDiag2 = ticInstance.occupiedSquares.map((row, i) => row[2 - i]);

            console.log(currentRow);
            console.log(currentCol);
            console.log(currentDiag1);
            console.log(currentDiag2);

            // check the row with the given x value
            // check the col with the given x value
            // check the diag with the given y value. 

            return false; //TODO: DELETE ME
        }
        // TODO: implement the computer mode response here. 

    });


    // imprints the pattern 


    // checks if col, row or diagonals are matching & not empty
    // function isWinner() {
    //     //generate an array of objects with first value startingI and second one increment. These represent the values isValidSliceMatch() takes. 
    //     const indexIncrementPairs = createIndexPairs();;



    //     // col and row pairs
    //     return !indexIncrementPairs.every(element => { // does this somehow always return false now?
    //         return !isValidSliceMatch(element.index, element.increment);
    //     }); // this should be returning false 

    //     function createIndexPairs() {
    //         const pairs = [];
    //         // row & col pairs
    //         for (let i = 0; i < 3; i++) {
    //             pairs.push({ index: i, increment: 3 });
    //             pairs.push({ index: i * 3, increment: 1 });
    //         }

    //         // diagonal pairs
    //         pairs.push({ index: 0, increment: 4 });
    //         pairs.push({ index: 2, increment: 2 });

    //         return pairs
    //     }
    // }

    // determines if the line has 3 of the same kind & not empty
    function isValidSliceMatch(startingI, increment) { // increment determines whether examining col, row or diagonal

        let initialValue = ticInstance.occupiedSquares[startingI];
        return (initialValue !== 'empty') && isSliceMatching(startingI, initialValue);

        // by using the appropriate increment compare the specific line on the grid to see if matching. 
        function isSliceMatching(startingI, initialValue) {
            for (let i = 1; i < 3; i++) {
                if (initialValue !== ticInstance.occupiedSquares[i * increment + startingI]) { return false };
            }
            return true
        }
    }

    function convertTo2DCoord(i) {
        let x = i % 3;
        let y = (i - x) / 3;

        return { x, y };
    }
});

// TODO: setup a computer player.