$(document).ready(function(){
	console.log('in tttttttt');
	$('#picture').faceDetection({
	        complete: function (faces) {
	            console.log(faces);
	        }
	    });

	console.log('test');
});