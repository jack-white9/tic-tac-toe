const gameboard = (() => {
    let array = [
        '', '', '', 
        '', '', '', 
        '', '', '',
    ];
    const _cells = document.querySelectorAll('.cell');
    const _restart = document.querySelector('.restartButton');
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
    let _roundWon = false;
    let _a;
    let _b;
    let _c;
    let _gameActive = true;

    const updateBoard = () => {
        _cells.forEach(function (cell, i) {
            cell.innerText = gameboard.array[i]
        });
    }
    
    const handleResultValidation = () => {
        for (let i = 0; i <= 7; i++) {
            const _winCondition = _winConditions[i];
            _a = array[_winCondition[0]];
            _b = array[_winCondition[1]];
            _c = array[_winCondition[2]];
            if (_a === '' || _b === '' || _c === '') {
                continue;
            }
            if (_a === _b && _b === _c) {
                _roundWon = true;
                _a = '';
                _b = '';
                _c = '';
                break
            }
        }
    }

    const eventHandlers = () => {
        _cells.forEach(function (cell, i) {
            cell.addEventListener('click', () => {
                if (_gameActive) {
                    let arrayNullCount = gameboard.array.length - gameboard.array.filter(String).length;
                    if (_cells[i].innerText !== '') {
                        return;
                    } else if (arrayNullCount % 2 == 0) {
                        gameboard.array.splice(i, 1, 'x');
                    } else {
                        gameboard.array.splice(i, 1, 'o');
                    }
                    gameboard.updateBoard();
                    handleResultValidation();
                    if (_roundWon) {
                        alert('You won');
                        _gameActive = false;
                        _roundWon = false;
                        return;
                    }
                }
            });
        });
        _restart.addEventListener('click', () => {
            for (let i = 0; i < gameboard.array.length; i++) {
                gameboard.array.splice(i, 1, '');
            }
            _gameActive = true;
            gameboard.updateBoard();
        });
    }

    return {
        array,
        updateBoard,
        handleResultValidation,
        eventHandlers,
    };
})();

const Player = (playerName) => {
    //
}

gameboard.eventHandlers();