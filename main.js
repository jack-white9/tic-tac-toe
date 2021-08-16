const gameboard = (() => {
    let array = ['','', '', '', '', '', '', '', ''];
    const cells = document.querySelectorAll('.cell');

    const updateBoard = () => {
        cells.forEach(function (cell, i) {
            cell.innerText = gameboard.array[i]
        });
    }

    const gameLogic = () => {
        //
    }

    const eventHandlers = () => {
        cells.forEach(function (cell, i) {
            cell.addEventListener('click', () => {
                let arrayNullCount = gameboard.array.length - gameboard.array.filter(String).length;

                if (arrayNullCount === 0) {
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