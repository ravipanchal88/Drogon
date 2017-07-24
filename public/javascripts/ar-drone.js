var express = require('express');
var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var router = express.Router();

//Function to Takeoff Drone 
function takeoff() {
  client.takeoff();
  client.after(2000,function(){
  	console.log("Now Hovering");
  	client.stop();
  });
};
exports.takeoff =takeoff;


//Function to Land Drone 
function land() {
  client.land();
};
exports.land =land;


//Function to Stop(Hover) Drone 
function stop() {
  client.stop();
};
exports.stop=stop;

//Function to Rotate Drone 90 Degrees
function rotate90() {
  client.clockwise(0.5);
  client.after(function(){
  	console.log("Now Rotating");
  	this.stop();
  });
  client.stop();
};
exports.rotate90=rotate90;

//Function to Rotate Drone 180 Degrees
function rotate180() {
  client.clockwise(1.0);
    client.stop();
};
exports.rotate180=rotate180;


//Function to Rotate Drone 270 Degrees
function rotate270() {
  client.clockwise(1.5);
};
exports.rotate270=rotate270;

//Function to Rotate Drone 360 Degrees 
function rotate360() {
  client.clockwise(2.0);
};

exports.rotate360=rotate360;
