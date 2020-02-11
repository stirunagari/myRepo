const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    username : {
        type: String
    },
    password : {
        type: String
    },
    fname : {
        type: String
    },
    sname : {
        type: String
    },
    email : {
        type: String
    },
    created_date : {
        type: Date
    },
    deleted : {
        type: Boolean
    },
    is_admin : {
        type: Boolean
    }
},{
    collection: 'users'
})

module.exports = mongoose.model('user', user)