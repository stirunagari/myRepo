const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let field_group = new Schema({
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
    collection: 'field_groups'
})

module.exports = mongoose.model('field_group', field_group)