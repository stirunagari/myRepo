// Leave models lives here
var Employee = require('../models/employee');

module.exports = {
	getAllEmployees : function(req, res){
		
			Employee.find(function(err, employees) {
				if (err)
					res.send(err);

				res.json(employees);
			});
		},

	postEmployee : function(req, res){
		var emp = new Employee(req.body);
	
		emp.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Employee created!' });
		});
	}	
}