// Leave models lives here
var Holiday = require('../models/holiday');

module.exports = {
	getAllHolidays : function(req, res){
		
			Holiday.find(function(err, holidays) {
				if (err)
					res.send(err);

				res.json(holidays);
			});
		},

	postHoliday : function(req, res){
		var emp = new Holiday(req.body);
	
		emp.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Holiday created!' });
		});
	}	
}