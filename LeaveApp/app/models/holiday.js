var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var HolidaySchema   = new Schema({
    name: String,
    description: String,
    date: String,
    day: String,
    year: String
});

module.exports = mongoose.model('Holiday', HolidaySchema);