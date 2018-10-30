const express = require('express');

const port = 4200;
const app = express();

app.get('/', (req, res) => {
    res.send({
        message: 'hello, world'
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
