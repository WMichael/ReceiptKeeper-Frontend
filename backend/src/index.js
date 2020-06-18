var express = require('express');
var morgan = require('morgan');
var helemt = require('helmet');

const app = express();
const port = 8080;

app.listen(port, '0.0.0.0', () => console.log(`Listening at localhost:${port}`));

app.get('/', (res,req) => {
    console.log('Hi');
    res.send({
        message: "ReceiptKeeper!"
    });
});