var express = require('express');
var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var router = express.Router();


/* GET home page. */
function takeoff() {
  client.takeoff();
};

exports.takeoff =takeoff;

function land() {
  client.land();
};
exports.land =land;

function stop() {
  client.stop();
};
exports.stop=stop;

function rotate90() {
  client.clockwise(0.5);
};
exports.rotate90=rotate90;

function rotate180() {
  client.clockwise(1.0);
};

exports.rotate180=rotate180;

function rotate270() {
  client.clockwise(1.5);
};

exports.rotate270=rotate270;

function rotate360() {
  client.clockwise(2.0);
};

exports.rotate360=rotate360;
