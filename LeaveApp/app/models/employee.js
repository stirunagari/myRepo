var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EmpSchema   = new Schema({
    name: String,
    manager_id: String,
    department: String,
    earned_leave_bal: Number,
    sick_leave_bal: Number,
    joined_date: Date,
    relieving_date: Date,
    emp_status: String,
    user_id: String,
    password: String
});

module.exports = mongoose.model('Employee', EmpSchema);