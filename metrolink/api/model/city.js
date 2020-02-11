const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let city = new Schema({
    name : {
        type: String
    },
    created_date : {
        type: Date
    },
    deleted : {
        type: Boolean
    }
},{
    collection: 'cities'
})

module.exports = mongoose.model('city', city)