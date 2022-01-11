$(function() {
    const $allGridSquares = $('.grid-item');
    const $winner = $('#winner');
    // assign the jquery Data values to each grid square element
    $allGridSquares.each(function(i) {
        // const { x, y } = getCoordinatesFromIndex(i);
        // $(this).data({ x: x, y: y, i: i });
        $(this).data({ i: i });
    });

    // setup click event for all grid squares. 
    $allGridSquares.on('click', function() {
        gridClick($(this));

        if (isWinner()) {
            const currentPlayer = ticInstance.currentTurn % 2 === 0 ? 1 : 2;
            // alert(`player ${currentPlayer} wins!`);
            $winner.text(`Player ${currentPlayer} has won!`);

            $allGridSquares.unbind();
        } else if (ticInstance.currentTurn > 9) {
            alert('No one has won :(')

            $allGridSquares.unbind();
        }

        // TODO: implement the computer mode response here. 

    })


    // imprints the pattern 
    function gridClick($thisElement) {
        const i = $thisElement.data('i');
        //TODO: Implement a mode where in you check what the current ticInstance.playingComp and then generate the computer playing from there.  

        const symbol = ticInstance.currentTurn % 2 === 1 ? 'X' : 'O';

        if (ticInstance.occupiedSquares[i] === "empty") {
            $thisElement.text(symbol); // Updates DOM 
            ticInstance.occupiedSquares[i] = symbol; // Updates Model;
            ticInstance.incrementTurn();

        } else {
            alert('that square is occupied, please choose again');
        }
    }

    // checks if col, row or diagonals are matching & not empty
    function isWinner() {
        //generate an array of objects with first value startingI and second one increment. These represent the values isValidSliceMatch() takes. 
        const indexIncrementPairs = createIndexPairs();;

        // col and row pairs
        return !indexIncrementPairs.every(element => { // does this somehow always return false now?
            return !isValidSliceMatch(element.index, element.increment);
        }); // this should be returning false 

        function createIndexPairs() {
            const pairs = [];
            // row & col pairs
            for (let i = 0; i < 3; i++) {
                pairs.push({ index: i, increment: 3 });
                pairs.push({ index: i * 3, increment: 1 });
            }

            // diagonal pairs
            pairs.push({ index: 0, increment: 4 });
            pairs.push({ index: 2, increment: 2 });

            return pairs
        }
    }

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

    // determining who's turn it is 

    // function getCoordinatesFromIndex(i) {
    //     i++; // the index from Data starts at 0, so 1 increment required. 
    //     let x = (i) % 3;
    //     x = x === 0 ? 3 : x; //FIXME: make this logic a bit more straight forward.
    //     let y = (i - x) / 3 + 1;

    //     return { x, y };
    // }
})

// TODO: setup a computer player.