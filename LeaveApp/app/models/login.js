var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LoginSchema   = new Schema({
    emp_id: String,
    user_name: String,
    password: String,
    login_start: Date,
    login_end: Date,
    session_id: String

});

module.exports = mongoose.model('Login', LoginSchema);