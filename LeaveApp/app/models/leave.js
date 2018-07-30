var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LeaveSchema   = new Schema({
    type: String,
    reason: String,
    status: String,
    emp_id: String,
    from_date: Date,
    to_date: Date,
    created_date: Date,
    created_by_id: String,
    approved_date: Date,
    approved_by_id: String

});

module.exports = mongoose.model('Leave', LeaveSchema);