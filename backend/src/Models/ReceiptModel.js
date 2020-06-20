const mongoose = require('mongoose');
const ReceiptSchema = require('../Schemas/ReceiptSchema');

const ReceiptModel = mongoose.model('Receipt', ReceiptSchema);

module.exports = ReceiptModel;