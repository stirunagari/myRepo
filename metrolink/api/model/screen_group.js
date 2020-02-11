const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let screen_group = new Schema({
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
    collection: 'screen_groups'
})

module.exports = mongoose.model('screen_group', screen_group)