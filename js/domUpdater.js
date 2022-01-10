$(function() {
    // when clicking on the actual div, get the value of the grid section updating

    const $allGridSquares = $('.grid-item');

    $allGridSquares.each(function(i) {
        // convert index 
        //TODO: need to make a separate function

        const { x, y } = getCoordinatesFromIndex(i);

        $(this).data({ x: x, y: y, i: i });
        // console.log('the text is:', $(this).text(), $(this).data());
    });

    // setup click event for all grid squares. 
    $allGridSquares.on('click', function() {
        gridClick($(this));

        //TODO: refactor this logic so that the turn determines the winner.
        winner = checkWinner();
        console.log('the winner is:', winner);
        ticInstance.incrementTurn();

    })

    // imprints the pattern 
    function gridClick($thisElement) {
        const i = $thisElement.data('i');

        const symbol = ticInstance.currentTurn % 2 === 1 ? 'X' : 'O';
        console.log('the current turn is', ticInstance.currentTurn);
        // check if there is an existing value
        if (ticInstance.occupiedSquares[i] === "empty") {
            // console.log('you have clicked:', $thisElement.data('x'), $thisElement.data('y'));
            $thisElement.text(symbol);
            ticInstance.occupiedSquares[i] = symbol;
        } else {
            console.log('that square is occupied');
        }
    }

    function checkWinner() {
        // ticInstance.occupiedSquares;

        //check columns
        let winner = 'none';
        for (let i = 0; i < 3; i++) {
            winner = findWinner(i);
            if (winner !== 'none') { return winner }
        }

        // check rows
        // check diagonals
    }

    // if a the line has 3 of the same kind then return player name else 'none'
    function findWinner(startingI) {
        let initialValue = ticInstance.occupiedSquares[startingI];
        if (initialValue === 'empty' || !colIsMatching(startingI, initialValue)) {
            return 'none'
        } else {
            return initialValue;
        }

        function colIsMatching(startingI, initialValue) {
            for (let i = 1; i < 3; i++) {
                if (initialValue !== ticInstance.occupiedSquares[i * 3 + startingI]) { return false };
            }
            return true
        }
    }

    function getCoordinatesFromIndex(i) {
        i++;
        let x = (i) % 3;
        x = x === 0 ? 3 : x; //FIXME: make this logic a bit more straight forward.
        let y = (i - x) / 3 + 1;

        return { x, y };
    }
})


// TODO: implement a .data() method when generating elements of the tic-tac grid.