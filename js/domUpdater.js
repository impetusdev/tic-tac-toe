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
        isWinner = checkIsWinner();
        console.log('true if winner:', isWinner);
    })

    // imprints the pattern 
    function gridClick($thisElement) {
        const i = $thisElement.data('i');
        const symbol = ticInstance.currentTurn % 2 === 1 ? 'X' : 'O';

        if (ticInstance.occupiedSquares[i] === "empty") {
            // console.log('you have clicked:', $thisElement.data('x'), $thisElement.data('y'));
            $thisElement.text(symbol);
            ticInstance.occupiedSquares[i] = symbol;
            ticInstance.incrementTurn();

        } else {
            console.log('that square is occupied, please choose again');
        }
    }

    //TODO: refactor this function so it only determines if someone has won.
    function checkIsWinner() {
        // ticInstance.occupiedSquares;

        //check columns
        let winner = 'none';
        for (let i = 0; i < 3; i++) {
            winner = findWinner(i);
            if (winner) { return winner }
        }
        return winner; // winner is only false here. 

        // check rows
        // check diagonals
    }

    // if a the line has 3 of the same kind then return player name else 'none'
    function findWinner(startingI) {
        let initialValue = ticInstance.occupiedSquares[startingI];
        return initialValue !== 'empty' && colIsMatching(startingI, initialValue);

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