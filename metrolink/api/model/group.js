const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let group = new Schema({
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
    collection: 'groups'
})

module.exports = mongoose.model('group', group)