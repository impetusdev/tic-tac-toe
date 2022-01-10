$(function() {
    // when clicking on the actual div, get the value of the grid section updating

    const $allGridSquares = $('.grid-item');
    console.log($allGridSquares);

    $allGridSquares.each(function(i) {
        // convert index 
        i++;
        //TODO: need to make a separate function
        let x = (i) % 3;
        x = x === 0 ? 3 : x; //FIXME: make this logic a bit more straight forward.
        let y = (i - x) / 3 + 1;

        $(this).data({ x: x, y: y, i: i - 1 });
        console.log('the text is:', $(this).text(), $(this).data());
    });

    $allGridSquares.on('click', function() {
        gridClick($(this));
    })

    function gridClick($thisElement) {
        const i = $thisElement.data('i');

        // check if there is an existing value
        if (ticInstance.occupiedSquares[i] === "empty") {
            console.log('you have clicked:', $thisElement.data('x'), $thisElement.data('y'));

            $thisElement.text('X');
            ticInstance.occupiedSquares[i] = 'X'
        } else {
            console.log('that square is occupied');
        }
    }
})


// TODO: implement a .data() method when generating elements of the tic-tac grid.