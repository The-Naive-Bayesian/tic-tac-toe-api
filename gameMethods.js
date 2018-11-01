const getIsGameFinished = (boardState) => {
    return (getWinner(boardState) !== 0) || (getMoves(boardState).length === 0);
};

const getMoves = (boardState) => {
    const moves = [];
    boardState.forEach((row, y) => {
        row.forEach((square, x) => {
            if (square === 0) {
                moves.push({x, y});
            }
        });
    });
    return moves;
};

const getRandomMove = (boardState) => {
    const moves = getMoves(boardState);
    return getRandomItem(moves);
};

const getWinner = (boardState) => {
    // 1 == player, 2 == AI, 0 == tie
    const possibilities = getColsRowsDiagonals(boardState);
    let winner = 0;
    for (let i=0; i<possibilities.length; i++) {
        const possibility = possibilities[i];
        if (threeInRow(...possibility)) {
            winner = possibility[0];
            break;
        }
    }
    return winner;
};

const getColsRowsDiagonals = (boardState) => {
    const [row1, row2, row3] = boardState;
    const col1 = [row1[0], row2[0], row3[0]];
    const col2 = [row1[1], row2[1], row3[1]];
    const col3 = [row1[2], row2[2], row3[2]];
    const diag1 = [row1[0], row2[1], row3[2]];
    const diag2 = [row1[2], row2[1], row3[0]];
    return [
        row1,
        row2,
        row3,
        col1,
        col2,
        col3,
        diag1,
        diag2
    ];
};

const threeInRow = (square1, square2, square3) => square1 === square2 && square2 === square3;

const getRandomItem = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

module.exports = {
    getIsGameFinished,
    getRandomMove,
    getWinner
};