const gameboard = (() => {
    let array = [
        '', '', '', 
        '', '', '', 
        '', '', '',
    ];

    const _cells = document.querySelectorAll('.cell');

    const _winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const updateBoard = () => {
        _cells.forEach(function (cell, i) {
            cell.innerText = gameboard.array[i]
        });
    }

    const gameLogic = () => {

    }

    const eventHandlers = () => {
        _cells.forEach(function (cell, i) {
            cell.addEventListener('click', () => { // draw x's and o's on click
                let arrayNullCount = gameboard.array.length - gameboard.array.filter(String).length;
                if (_cells[i].innerText !== '') {
                    return;
                } else if (arrayNullCount % 2 == 0) {
                    gameboard.array.splice(i, 1, 'x');
                } else {
                    gameboard.array.splice(i, 1, 'o');
                }
                gameboard.updateBoard();
            });
        });
    }


    return {
        array,
        updateBoard,
        gameLogic,
        eventHandlers,
    };
})();

const Player = (playerName) => {
    //
}

gameboard.eventHandlers();