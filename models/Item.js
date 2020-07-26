const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    gravity: [
        {
            date: {type: Date, default: Date.now},
            reading: {type: Number}
        }
    ],
    ingredients: Array,
    directions: Array,
    notes: [
        {
            date: {type: Date, default: Date.now},
            note: {type: String}
        }
    ],
    description: {
        type: String,
        required: true
    },
});

module.exports = Item = mongoose.model('item', ItemSchema);