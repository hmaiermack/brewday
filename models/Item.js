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
    gravity: {
                date: {type: Date, default: Date.now},
                reading: {type: Number}
            },
    recipe: Array,
    notes: {
            date: {type: Date, default: Date.now},
            note: {type: String}
        },
    description: String,
});

module.exports = Item = mongoose.model('item', ItemSchema);