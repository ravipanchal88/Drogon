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
	console.log('Takeoff Successfull and now hovering');
});


	// SC.get('/tracks', {
	//  genres: "todays Hits"	  
	// }).then(function(tracks) {
	//     var searchresultset = tracks;
	//     //console.log(searchresultset);
	//     renderList(searchresultset)
	// });


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
// router.post('/rotate90', function(req, res,next) {
// 	console.log('Rotataing Drogon to 90 Degrees');
// 	Drogon.rotate90()
// 	res.render('index');
// });

//Rotate 90 Degrees with promise
router.post('/rotate90', function(req, res,next) {
	console.log('Rotating Drogon to 90 Degrees');
	var rotate90 = new Promise (function (reject,resolve){
	console.log(rotate90);	
	Drogon.rotate90();
	}).then(function (){
   console.log('Rotating Successfull');
	});
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
