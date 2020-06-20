// Dependencies
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const ReceiptRouter = require('./Routes/ReceiptRouter');
require('dotenv').config();

const app = express();
app.use(morgan("common"));
app.use(helmet())
app.use(express.json());
app.use('/receipts', ReceiptRouter);
const port = process.env.PORT || 8081;

mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error!'));
db.once('open', () => {
    app.listen(port, () => console.log(`Listening at localhost:${port} 🎉`));
});    

app.get('/', (req,res,next) => {
    res.send({
        message: "ReceiptKeeper! 🧾"
    });   
});    

// Error handling
app.use(function (err, req, res, next) {
    res.status(err.status ? err.status : 500).send(err.message ? err.message : "Opps an error has occured! 🔧");
});