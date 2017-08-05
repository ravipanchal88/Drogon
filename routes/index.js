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

//Rotate 90 Degrees working
router.post('/rotateClockwise', function(req, res,next) {
	console.log('Rotating Drogon to Clockwise');
	//Drogon.stop(5000,function(){
		Drogon.rotateClockwise();
		res.render('index');
});
	
//};

//Rotate 180 Degrees
router.post('/rotateCounterClockwise', function(req, res,next) {
	console.log('Rotating Drogon to anti Clockwise');
	Drogon.rotateCounterClockwise();
	res.render('index');
});

//capture pngstream
router.post('/attackmode', function(req, res,next) {
	console.log('RedBull Mode');
	Drogon.attackmode();
	res.render('index');
});


router.post('/moveforward', function(req, res,next) {
	console.log('forwarding');
	Drogon.moveForward();
	res.render('index');
});


router.post('/detectfaces', function(req, res,next) {
	console.log('detectfaces');
	Drogon.detectfaces();
	res.render('index');
});
module.exports = router;
