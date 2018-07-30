var express = require('express');
var leaveCtrl = require('./controllers/leaveController');
var empCtrl = require('./controllers/empController');
var holidayCtrl = require('./controllers/holidayController');


var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

/*router.get('*', function(req, res) {
     res.sendfile('./public/index.html'); // load our public/index.html file
});*/

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

//Get All Leaves
router.route('/getAllLeaves').get(leaveCtrl.getAllLeaves);
//Post leave
router.route('/leave').post(leaveCtrl.postLeave);


//holiday apis
router.route('/getAllHolidays').get(holidayCtrl.getAllHolidays);
router.route('/holiday').post(holidayCtrl.postHoliday);



module.exports = router;