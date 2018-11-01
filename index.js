const {getIsGameFinished, getRandomMove, getWinner} = require("./gameMethods");

const express = require('express');
const bodyParser = require('body-parser');

const port = 4200;
const app = express();

app.use(bodyParser.json());
// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send({
        message: 'hello, world'
    });
});

app.post('/tic-tac-toe', (req, res) => {
    // We expect a 3x3 array with 0, 1, and 2 as values
    const {boardState} = req.body;
    if (getIsGameFinished(boardState)) {
        res.send({
            finished: true,
            winner: getWinner(boardState),
            boardState
        });
    } else {
        // Determine all possible moves
        const move = getRandomMove(boardState);
        // Pick a random move
        // Make move on board and send
        boardState[move.y][move.x] = 2;
        if (getIsGameFinished(boardState)) {
            res.send({
                finished: true,
                winner: getWinner(boardState),
                boardState
            });
        } else {
            res.send({
                finished: false,
                winner: null,
                boardState
            });
        }
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
