var express = require('express');
var Drogon = require('../public/javascripts/ar-drone.js');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res,next) {
  res.render('index');
});

//Take Off Function 
router.post('/takeoff', function(req, res,next) {
	console.log('Flying Drogon');
	Drogon.takeoff();
	res.render('index');

});

//Land Function 
router.post('/land', function(req, res,next) {
	console.log('Landing Drogon');
	Drogon.land();
	res.render('index');
});


//Stop Function 
router.post('/stop', function(req, res,next) {
	console.log('Stoping Drogon');
	Drogon.stop();
	res.render('index');
});

//Rotate 90 Degrees
router.post('/rotate90', function(req, res,next) {
	console.log('Rotataing Drogon to 90 Degrees');
	Drogon.rotate90().then(Drogon.stop())
	res.render('index');
});


//Rotate 180 Degrees
router.post('/rotate180', function(req, res,next) {
	console.log('Rotataing Drogon to 180 Degrees');
	Drogon.rotate180();
	res.render('index');
});

//Rotate 270 Degrees
router.post('/rotate270', function(req, res,next) {
	console.log('Rotating Drogon to 270 Degrees');
	Drogon.rotate270();
	res.render('index');
});




module.exports = router;
