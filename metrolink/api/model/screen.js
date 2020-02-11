const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let screen = new Schema({
    name : {
        type: String
    },
    city_id : {
        type: String
    },
    created_date : {
        type: Date
    },
    deleted : {
        type: Boolean
    }
},{
    collection: 'screens'
})

module.exports = mongoose.model('screen', screen)