// document.getElementByType()
function giveMeLottoBalls(){
	return Math.floor((Math.random() * 69)) + 1;
}

function deviceMotionUpdate(e){
  var x = e.accelerationIncludingGravity.x;
  var y = e.accelerationIncludingGravity.y;
  var z = e.accelerationIncludingGravity.z;

  if((x*x)+(y*y)+(z*z)>=150){
  	$("#number1").val(giveMeLottoBalls());
		$("#number2").val(giveMeLottoBalls());
		$("#number3").val(giveMeLottoBalls());
		$("#number4").val(giveMeLottoBalls());
		$("#number5").val(giveMeLottoBalls());
  }
}

window.addEventListener("devicemotion", deviceMotionUpdate, true);


// $(document).ready(function(){

// 	$("#genRandNumb").click(function(){
// 		// Lotter numbers are 1-69
		
// 	});
// });