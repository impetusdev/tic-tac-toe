$(function() {
    // bind reset
    $('#reset').on('click', function() {
        ticInstance = new TicTacBoard(); //working
        // clear all values
        $('.grid-item').text(' ');
        $('.grid-item').unbind();
        $('#winner').text(' ');
        // clear all on click handles
        console.log('reset game');
        runGame();
    });

    runGame();

    function runGame() {
        const $allGridSquares = $('.grid-item');
        const $winner = $('#winner');

        // assign the jquery Data values to each grid square element
        $allGridSquares.each(function(i) {
            const x = i % 3;
            const y = (i - x) / 3;

            $(this).data({ x: x, y: y }); // these x y values can be used in occupiedSquares
        });

        // setup click event for all grid squares. 
        $allGridSquares.on('click', function() {
            const $square = $(this);
            let board = ticInstance.occupiedSquares;
            let x = $square.data('x');
            let y = $square.data('y');

            //human play
            gridClick();
            checkWinner(x, y, board);

            board = ticInstance.occupiedSquares;

            //computer play
            if (ticInstance.playingComp && ticInstance.currentTurn % 2 === 0) {
                let { x, y } = computerClick();
                board = ticInstance.occupiedSquares;

                checkWinner(x, y, board); // FIXME: this checkwinner is not registering properly
            }

            function gridClick() {
                //TODO: Implement a mode where in you check what the current ticInstance.playingComp and then generate the computer playing from there.  
                const symbol = ticInstance.currentTurn % 2 === 1 ? 'X' : 'O';

                if (checkOccupied(x, y)) { //TODO: double check if the order of x and y is right. 
                    $square.text(symbol); // Updates DOM 
                    board[y][x] = symbol; // Updates Model;
                    ticInstance.incrementTurn();

                } else {
                    alert('that square is occupied, please choose again');
                }
            }

            // click a random spot for player 2
            function computerClick() {
                debugger;
                let { x, y } = findBestMove(ticInstance.occupiedSquares, ticInstance.currentTurn - 1);
                debugger;

                board[y][x] = 'O'
                ticInstance.incrementTurn();

                const $current = $allGridSquares.filter(function() {
                    return $(this).data('x') === x && $(this).data('y') === y;
                });
                $current.text('O');

                return { x, y };
            }
        });

        // check if the last move with x, y coordinates is a winning move. 
        function checkWinner(x, y, board) {
            if (isWinner(x, y, board)) {
                const currentPlayer = ticInstance.currentTurn % 2 === 0 ? 1 : 2;
                $winner.text(`Player ${currentPlayer} has won!`);
                ticInstance.playingComp = false;

                $allGridSquares.unbind();
            } else if (ticInstance.currentTurn > 9) {
                ticInstance.playingComp = false;
                $winner.text(`No one has won :()`);

                $allGridSquares.unbind();
            }
        }
    }
});

// export function only if testing. 
function checkOccupied(x, y) {
    return ticInstance.occupiedSquares[y][x] === "empty";
}