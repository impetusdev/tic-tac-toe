$(function() {
    const $allGridSquares = $('.grid-item');

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
            alert(`player ${currentPlayer} wins!`);
        }
    })

    // imprints the pattern 
    function gridClick($thisElement) {
        const i = $thisElement.data('i');
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
    function isWinner() { //TODO: ASK LUKE HOW I SHOULD LAYOUT THESE FUNTIONS AS THEY ARE ONLY USED HERE. 
        return isColMatching() || isRowMatching() || isDiagonalMatching();

        function isColMatching() {
            for (let i = 0; i < 3; i++) {
                if (isValidSliceMatch(i, 3)) { return true }
            }

            return false;
        }

        function isRowMatching() {
            for (let i = 0; i <= 6; i += 3) {
                if (isValidSliceMatch(i, 1)) { return true }
            }

            return false;
        }

        function isDiagonalMatching() {
            if (isValidSliceMatch(0, 4)) { return true };
            if (isValidSliceMatch(2, 2)) { return true };
            return false;
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

    // function getCoordinatesFromIndex(i) {
    //     i++; // the index from Data starts at 0, so 1 increment required. 
    //     let x = (i) % 3;
    //     x = x === 0 ? 3 : x; //FIXME: make this logic a bit more straight forward.
    //     let y = (i - x) / 3 + 1;

    //     return { x, y };
    // }
})