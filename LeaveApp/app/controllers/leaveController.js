// Leave models lives here
var Leave = require('../models/leave');

module.exports = {
	getAllLeaves : function(req, res){
		// get all the leaves (accessed at GET http://localhost:8080/api/leaves)
		
			Leave.find(function(err, leaves) {
				if (err)
					res.send(err);
				
				res.json({"leaves": leaves});
			});
		},

	postLeave : function(req, res){
		var leave = new Leave(req.body);
	
		leave.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Leave created!' });
		});
	}	
}