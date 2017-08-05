var express = require('express');
var arDrone = require('ar-drone');
var control = arDrone.createUdpControl();
var client  = arDrone.createClient();
var router = express.Router();
var ffmpeg = require('ffmpeg');
var Faced = require('faced');
var fs = require('fs');
const face = require('face-detector')
PNG = require('pngjs').PNG;
var Datauri = require('datauri');
var faceDetection = require('jquery-facedetection');
//var $ = require('jQuery');

//Function to Takeoff Drone working
function takeoff(callback) {
  client.takeoff();  
};
exports.takeoff =takeoff;

//Function to Land Drone 
function land(callback) {
  client.land();
};
exports.land =land;

//Function to Stop(Hover) Drone 
function stop(callback) {
  client.stop();
};
exports.stop=stop;

//Function to Rotate Drone 90 Degrees
function rotateClockwise(callback) {
  client.clockwise(0.2);
};
exports.rotateClockwise=rotateClockwise;

//Function to Rotate Drone 180 Degrees
function rotateCounterClockwise(callback) {
  client.clockwise(-0.2);
  // return;
};
exports.rotateCounterClockwise=rotateCounterClockwise;

//Function to Move Forward
function moveForward(callback) {
	console.log('test forwarding');
  client.front(0.1);
};
exports.moveForward =moveForward;



//Function to attack Humans
function attackmode(callback){
	//const datauri = new Datauri();
	var i = 1;
	var pngStream = client.getPngStream(); 
	pngStream.on('data', (data)=>{
		for(i=1;i<2;i++){
			fs.writeFileSync(`/Users/ravipanchal88/Desktop/NYCDA/Drogon2/captured-images/test-${i}.png`, data)
      face.detect(`/Users/ravipanchal88/Desktop/NYCDA/Drogon2/captured-images/test-${i}.png`,function(result){
        console.log(result);
        if(result > 0 ){
          console.log('Attacking Human, you destroyed all the Plants and great animals that were around,now learn your Faith');
          client.front(1.0);
        }
        else{
          console.log('No Human Around!!! Earth is Destroyed');
          client.stop();
        }
      })  
    }
  })
} 
exports.attackmode=attackmode;

function detectfaces(){
  //**************using FACED
  // var faced = new Faced();
  // var imagepath = `'http://i.huffpost.com/gen/1326188/images/o-FRIENDS-TV-facebook.jpg';`
  // console.log(imagepath);
  // faced.detect('/Users/ravipanchal88/Downloads/Ravi/Ravi-1.jpg', function (faces, image, file) {
  //   if (!faces) {
  //       return console.log("No faces found!");
  //     }
  //   var face = faces[0];
  //   console.log(face);
     
    // console.log(
    //   "Found a face at %d,%d with dimensions %dx%d",
    //   face.getX(),
    //   face.getY(),
    //   face.getWidth(),
    //   face.getHeight()
    //   );
     
    //   console.log(
    //     "What a pretty face, it %s a mouth, it %s a nose, it % a left eye and it %s a right eye!",
    //     face.getMouth() ? "has" : "does not have",
    //     face.getNose() ? "has" : "does not have",
    //     face.getEyeLeft() ? "has" : "does not have",
    //     face.getEyeRight() ? "has" : "does not have"
    //   );
    //});
// }
  //*************************
  
  
 // //Face (Detects if there is face in an an image)
 //  var imageUrl = 'https://cdn.shopify.com/s/files/1/0392/7105/products/FF-TT-AUO-001-Thumbnail-Rectangle_large.jpg?v=1400600629'
 //    face.detect(imageUrl,function(result){
 //    console.log(result);
 //      if(result >0 ){
 //      console.log('trrtrtrtrtrt');
 //      }
 //      else{
 //        console.log('no images is found');
 //      }
 //    });
 //  }
//****************************

   // console.log('in the detect function');
   // var imageUrl = 'http://i.huffpost.com/gen/1326188/images/o-FRIENDS-TV-facebook.jpg'
   // //var x = document.getElementById('picture');
   // //console.log(x);
   //      imageUrl.faceDetection(
   //      {
   //      complete: function (faces) {
   //          console.log('tsttttt');
   //          console.log(faces);
   //      }
   //  });
  } 
exports.detectfaces=detectfaces
