const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let field = new Schema({
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
    collection: 'fields'
})

module.exports = mongoose.model('field', field)