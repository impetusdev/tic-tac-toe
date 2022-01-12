$(function() {
    const $allGridSquares = $('.grid-item');
    const $winner = $('#winner');

    // assign the jquery Data values to each grid square element
    $allGridSquares.each(function(i) {
        let x = i % 3;
        let y = (i - x) / 3;

        $(this).data({ x: x, y: y }); // these x y values can be used in occupiedSquares
    });

    // setup click event for all grid squares. 
    $allGridSquares.on('click', function() {
        const $square = $(this);
        const x = $square.data('x');
        const y = $square.data('y');
        gridClick();
        checkWinner();

        // if no winner, computer plays a move. 
        // Initially computer will always be player two. 
        if (ticInstance.playingComp) {
            computerClick();
            checkWinner();
        }

        function checkWinner() {
            if (isWinner()) {
                const currentPlayer = ticInstance.currentTurn % 2 === 0 ? 1 : 2;
                $winner.text(`Player ${currentPlayer} has won!`);
                ticInstance.playingComp = false;

                $allGridSquares.unbind();
            } else if (ticInstance.currentTurn > 9) {
                ticInstance.playingComp = false;
                $winner.text(`No one has won :()`);

                $allGridSquares.unbind();
            }

            function isWinner() {
                const slices = [];
                slices.push( // get all appropriate slices. 
                    ticInstance.occupiedSquares[y], // row 
                    ticInstance.occupiedSquares.map(row => row[x]), // col
                    ticInstance.occupiedSquares.map((row, i) => row[i]), // diag starting top left
                    ticInstance.occupiedSquares.map((row, i) => row[2 - i]), // diag starting top right
                );

                return !slices.every(slice => { //return true if one slice is matching, else return false 
                    // debugger;
                    const firstEl = slice[0];
                    return firstEl === 'empty' || !slice.every(square => square === firstEl); // this should result with true
                }); // the use of .every here is so that the loop will break when returning false
            }
        }
        // click a random spot for player 2
        function computerClick() {
            let notPerformedMove = true;

            while (notPerformedMove) {
                let xRand = Math.floor(Math.random() * 3);
                let yRand = Math.floor(Math.random() * 3);

                if (ticInstance.occupiedSquares[yRand][xRand] == 'empty') {
                    ticInstance.occupiedSquares[yRand][xRand] = 'O';
                    ticInstance.incrementTurn();

                    const $current = $allGridSquares.filter(function() {
                        // console.log('the this is:', $(this));
                        return $(this).data('x') === xRand && $(this).data('y') === yRand;
                    });
                    $current.text('O');

                    notPerformedMove = false;
                }
            }
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
    });
});