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
    gravity: {type: [
            {
                date: {type: Date, default: Date.now},
                reading: {type: Number}
            }    
        ]},
    recipe: Array,
    notes:  {type: [
        {
            date: {type: Date, default: Date.now},
            note: {type: String}
        }    
    ]}
});

module.exports = Item = mongoose.model('item', ItemSchema);