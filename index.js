const express = require('express');

const port = 4200;
const app = express();

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
    // example return value
    res.send([
        [{fill: 'black'}, null, null],
        [null, {fill: 'red'}, {fill: 'red'}],
        [null, null, {fill: 'black'}],
    ]);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
