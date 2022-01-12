$(function() {
    // bind reset
    $('#reset').on('click', function() {
        ticInstance = new TicTacBoard(); //working
        // clear all values
        $('.grid-item').text(' ');
        $('.grid-item').unbind();
        $('#winner').text('');
        // clear all on click handles
        console.log('reset game');
        runGame();
    })

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
            let x = $square.data('x');
            let y = $square.data('y');
            gridClick();
            checkWinner();

            //computer player 2 starts
            if (ticInstance.playingComp && ticInstance.currentTurn % 2 === 0) {
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

                // test if any row/col/diagonal that the clicked element lies on, is a match. 
                function isWinner() {
                    const slices = [];
                    slices.push(
                        ticInstance.occupiedSquares[y], // row
                        ticInstance.occupiedSquares.map(row => row[x]), // col //TODO: consider putting in the if statement checking if the coords match the diagonal. 
                        ticInstance.occupiedSquares.map((row, i) => row[i]), // diag starting top left
                        ticInstance.occupiedSquares.map((row, i) => row[2 - i]), // diag starting top right
                    );
                    console.log('slices are: ', slices);

                    return !slices.every(slice => { //return true if one slice is matching, else return false 
                        console.log('slice', slice);
                        const firstEl = slice[0];
                        return firstEl === 'empty' || !slice.every(square => square === firstEl); // this should result with true
                    }); // the use of .every here is so that the loop will break when returning false
                }
            }
            // click a random spot for player 2
            function computerClick() {
                let notPerformedMove = true;

                while (notPerformedMove) {
                    x = Math.floor(Math.random() * 3);
                    y = Math.floor(Math.random() * 3);

                    if (ticInstance.occupiedSquares[y][x] == 'empty') {
                        ticInstance.occupiedSquares[y][x] = 'O';
                        ticInstance.incrementTurn();

                        const $current = $allGridSquares.filter(function() {
                            // console.log('the this is:', $(this));
                            return $(this).data('x') === x && $(this).data('y') === y;
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
    }
    runGame();
});